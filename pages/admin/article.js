import { Input } from 'shared/components/Common'
import { AdminLayout } from 'shared/layouts'
import { gfAdminArticle } from 'goldfish/Admin'
import { Editor } from '@tinymce/tinymce-react'

import 'shared/components/Admin/style/admin-article.sass'

const mapState = ({ adminArticleStore: { uploadArticleImage } }) => ({
  uploadArticleImage,
})

@inject(mapState)
export default class AdminArticle extends React.Component {
  state = {
    name: '',
    href: '',
    image: '',
    tiny: '',
  }

  tinyChange = (e) => {
    this.setState({ tiny: e.target.getContent().trim() });
  }

  onSubmit = e => {
    e.preventDefault();
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value,
    })
  }

  handleFileChange = (files) => {
    this.setState({ image: files[0] })
  }

  imageUpload = (Blob, success, failure) => {

  }

  render() {
    const { image, name, href } = this.state;
    const { uploadArticleImage } = this.props

    return (
      <AdminLayout className="admin-article">
        <h1>ARTICLES</h1>

        <div className="admin-article__content">
          <form onSubmit={this.onSubmit}>
            <Input
              name="name"
              onChange={this.onChange}
              value={name}
              heroRight={gfAdminArticle.inputHeroes.name}
            />
            <Input
              type="file"
              name="file"
              onChange={this.handleFileChange}
              heroRight={gfAdminArticle.inputHeroes.file}
              visibleValue={image.name}
            />
            <Input
              name="href"
              onChange={this.onChange}
              value={href}
              heroRight={gfAdminArticle.inputHeroes.href}
            />
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
        />
      </AdminLayout>
    );
  }
}