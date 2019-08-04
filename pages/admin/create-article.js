import { withRouter  } from 'next/router'

import { Input } from 'shared/components/Common'
import { AdminLayout } from 'shared/layouts'
import { gfAdminArticle } from 'goldfish/Admin'
import { Editor } from '@tinymce/tinymce-react'
import { Loader } from 'shared/components/Common'

import 'shared/components/Admin/style/admin-article.sass'

const mapState = ({
                    adminArticleStore: { uploadArticleImage, handleArticleUpload, error, articleState, message, handleUpdateArticle },
                    adminArticleStore,
  articleViewStore: { getArticle, articleViewState, error: articleViewError, articleView },
                  }) => ({
  uploadArticleImage,
  handleArticleUpload,
  error,
  articleState,
  adminArticleStore,
  message,
  getArticle,
  articleViewState,
  articleViewError,
  articleView,
  handleUpdateArticle,
})

@withRouter
@inject(mapState)
export default class AdminArticle extends React.Component {
  constructor(props) {
    super(props)

    const { router: { query: { edit, id } } } = props
    this.timer = null
    this.isUpdate = !!(edit && id)

    this.initState = Object.keys(gfAdminArticle.inputs).reduce((init, next) => ({
      ...init,
      [next]: '',
    }), { content: '' })

    this.state = this.initState
  }

  componentDidUpdate(prevProps) {
    const { router: { query: { edit, id } } } = this.props
    if (!edit && !id && prevProps.router.query.edit) {
      this.setState(this.initState)
    }
  }

  async componentDidMount() {
    const { router: { query: { edit, id } }, getArticle } = this.props

    if (!edit || !id) return;

    await getArticle(id)

    if (this.props.articleViewError) return;

    const stateObj = Object.keys(this.initState)
      .filter(key => this.initState[key] || this.initState[key] === '')
      .reduce((init, next) => ({
        ...init,
        [next]: next === 'file' ? { name: this.props.articleView.previewImage } : this.props.articleView[next],
      }), {})

    this.setState(stateObj)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    this.timer = null
    this.props.adminArticleStore.error = ''
  }

  tinyChange = (e) => {
    this.setState({ content: e.target.getContent().trim() })
    this.props.adminArticleStore.error = ''
  }

  onSubmit = async e => {
    e.preventDefault();

    const { handleArticleUpload, adminArticleStore } = this.props
    const { router: { query: { id } } } = this.props

    try {
      await handleArticleUpload({ ...this.state, id })

      this.timer = setTimeout(() => adminArticleStore.message = '', 2000)
      if (!adminArticleStore.error && !this.isUpdate) this.setState(this.initState)
    } catch (e) {
      console.warn(e)
    }
  }

  onChange = (value, name) => {
    this.setState({
      [name]: name === 'tags' ? value.split(',').map(item => item.trim()) : value,
    })
    this.props.adminArticleStore.error = ''
  }

  handleFileChange = (files) => {
    this.setState({ file: files[0] })
    this.props.adminArticleStore.error = ''
  }

  render() {
    const { file = {}, content } = this.state;
    const { uploadArticleImage, error, articleState, message, articleViewState, articleViewError } = this.props

    const isLoading = articleViewState === 'pending' || articleState === 'pending'
    const isError = error || articleViewError

    return (
      <AdminLayout className="admin-article">
        <h1>Create/edit article</h1>

        {isError && <div className="error">{isError}</div>}
        {isLoading && <Loader />}
        {message && <div className="admin-article__message">{message}</div>}

        <div className="admin-article__content">
          <form onSubmit={this.onSubmit}>
            {Object.entries(gfAdminArticle.inputs).map(([key, { hero, ...props }]) => (
              key === 'file' ?
                <Input
                  key={key}
                  type="file"
                  name={key}
                  onChange={this.handleFileChange}
                  heroRight={hero}
                  visibleValue={file.name}
                /> :
                <Input
                  key={key}
                  name={key}
                  onChange={this.onChange}
                  value={this.state[key]}
                  heroRight={hero}
                  {...props}
                />
            ))}
            <button>SUBMIT</button>
          </form>
        </div>

        <Editor
          init={{
            plugins: "link image code",
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | image',
            images_upload_handler: uploadArticleImage,
          }}
          onChange={this.tinyChange}
          value={content}
        />
      </AdminLayout>
    );
  }
}