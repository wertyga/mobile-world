import { Page, Section } from 'shared/layouts'
import { withRouter } from 'next/router'
import { HomePageText as TEXT, gfArticleStore } from 'goldfish'

import { TopStories } from 'shared/components/TopStories/TopStories'
import { Loader } from 'shared/components/Common'

import Link from 'next/link'

const mapState = ({ articleStore: { getArticleList, articles, articleState } }) => ({ getArticleList, articles, articleState })

@withRouter
@inject(mapState)
@observer
export default class HomePage extends React.Component {
  render() {
    const { articles, articleState } = this.props;

    return (
      <Page title={TEXT.title} className="home-page">
        {articleState === 'pending' && <Loader />}

        <Section className="home-page__wrapper">
          <TopStories list={articles} header={TEXT.topArticles} />
        </Section>

      </Page>
    )
  }
}
