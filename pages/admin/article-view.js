import Link from 'next/link'
import { withRouter } from 'next/router'
import { AdminLayout } from 'shared/layouts'
import _JSXStyle from 'styled-jsx/style'

import { Loader } from 'shared/components/Common'
import { ArticleView } from 'shared/components/Article'

import { gfAdminArticle } from 'goldfish'

const mapState = ({
  articleViewStore: {
    articleViewState,
    articleView,
    error: viewError,
    getArticle,
  },
  adminArticleStore: {
    handleArticleDelete,
    error: adminError,
    articleState,
  },
                  }) => ({
  articleViewState,
  articleView,
  viewError,
  getArticle,
  handleArticleDelete,
  adminError,
  articleState,
})

@withRouter
@inject(mapState)
export default class AdminArticleView extends React.Component {
  constructor(props) {
    super(props)

    const { router: { query: { id } } } = props
    props.getArticle(id)
  }

  onDeleteArticle = async () => {
    const { router, handleArticleDelete } = this.props;
    const { query: { id } } = router

    try {
      await handleArticleDelete(id)

      router.push('/admin/articles')
    } catch (e) {
      console.warn(e)
    }
  }

  render() {
    const {
      router: { query: { id } },
      articleView,
      articleViewState,
      viewError,
      adminError,
      articleState,
    } = this.props
    const loading = articleViewState === 'pending' || articleState === 'pending'
    const error = viewError || adminError
    return (
      <AdminLayout className="admin-article-view container">

        {loading && <Loader />}
        {error && <div className="error">{error}</div>}

        <div className="controls">
          <Link href={gfAdminArticle.editLink(id)}>
            <a className="edit">Edit</a>
          </Link>
          <button onClick={this.onDeleteArticle} className="delete">Delete</button>
        </div>

        <div className="admin-article-view__wrapper">
          <ArticleView {...articleView} />
        </div>

        <style jsx>{`
          .admin-article-view {
            position: relative;
          }
          .error {
            width: 100%;
            padding: 1rem;
            display: flex;
            justify-content: center;
            color: red;
          }
          .controls {
            display: flex;
            width: 100%;
            justify-content: flex-end;
          }
          .edit, .delete {
            padding: 1rem;
            background-color: cornflowerblue;
            color: white;
            text-transform: uppercase;
          }
          .delete {
            background-color: darkred;
            margin-left: 1rem;
            cursor: pointer;
          }
        `}</style>

      </AdminLayout>
    );
  }
}