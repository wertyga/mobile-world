import Link from 'next/link'
import { AdminLayout } from 'shared/layouts'
import { Loader } from 'shared/components/Common'

import 'shared/components/Admin/style/admin-articles.sass'

const mapState = ({ articleStore: { getArticleList, articles, articleState } }) => ({
  getArticleList,
  articles,
  articleState,
})

@inject(mapState)
export default class AdminArticles extends React.Component {
  constructor(props) {
    super(props);

    props.getArticleList()
  }

  render() {
    const { articles, articleState } = this.props
    return (
      <AdminLayout className="admin-articles container">
        <h1>ARTICLES</h1>

        {articleState === 'pending' && <Loader />}

        <div className="admin-articles__list">
          {articles.map(({ name, _id }) => (
            <Link href={`/admin/article-view?id=${_id}`} key={_id}>
              <a>{name}</a>
            </Link>
          ))}
        </div>
      </AdminLayout>
    );
  }
}