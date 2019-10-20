import { Page, Section } from 'shared/layouts'
import { withRouter } from 'next/router'
import { HomePageText as TEXT, gfArticleStore } from 'goldfish'

import { TopStories } from 'shared/components/Common/TopStories/TopStories'
import { Loader } from 'shared/components/Common'

import Link from 'next/link'

// import 'shared/styles/home-page.sass'

const mapState = ({ articleStore: { getArticleList, articles, articleState } }) => ({ getArticleList, articles, articleState })

@withRouter
@inject(mapState)
@observer
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    // const { router: { pathname }, getArticleList } = props;
    // const articleOpts = {
    //   pathname,
    //   destination: TEXT.menuArticles,
    // }
    // getArticleList(0, gfArticleStore.clientFetchFields, articleOpts)
  }

  render() {
    const { articles, articleState } = this.props;
    return (
      <Page title={TEXT.title} className="home-page">
        {articleState === 'pending' && <Loader />}

        <Section className="home-page__wrapper">
          <TopStories list={articles} />
        </Section>

      </Page>
    )
  }
}
