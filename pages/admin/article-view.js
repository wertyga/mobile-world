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
    error,
    getArticle,
  }}) => ({
  articleViewState,
  articleView,
  error,
  getArticle,
})

@withRouter
@inject(mapState)
export default class AdminArticleView extends React.Component {
  constructor(props) {
    super(props)

    const { router: { query: { id } } } = props
    props.getArticle(id)
  }

  render() {
    const { router: { query: { id } }, articleView, articleViewState, error } = this.props
    const loading = articleViewState === 'pending'
    return (
      <AdminLayout className="admin-article-view container">

        {loading && <Loader />}
        {error && <div className="error">{error}</div>}

        <div className="admin-article-view__controls">
          <Link href={gfAdminArticle.editLink(id)}>
            <a className="admin-article-view__edit">Edit</a>
          </Link>
        </div>

        <div className="admin-article-view__wrapper">
          <ArticleView {...articleView} />
        </div>

      </AdminLayout>
    );
  }
}