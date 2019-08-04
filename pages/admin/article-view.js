import Link from 'next/link'
import { withRouter } from 'next/router'
import { AdminLayout } from 'shared/layouts'

import { Loader } from 'shared/components/Common'
import { ArticleView } from 'shared/components/Article'

import { gfAdminArticle } from 'goldfish'

import 'shared/components/Admin/style/admin-article-view.sass'

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

        <div className="admin-article-view__controls">
          <Link href={gfAdminArticle.editLink(id)}>
            <a className="admin-article-view__edit">Edit</a>
          </Link>
          <button onClick={this.onDeleteArticle} className="admin-article-view__delete">Delete</button>
        </div>

        <div className="admin-article-view__wrapper">
          <ArticleView {...articleView} />
        </div>

      </AdminLayout>
    );
  }
}