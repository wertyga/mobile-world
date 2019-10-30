import { Page, Section } from 'shared/layouts'
import { withRouter } from 'next/router'
import { HomePageText as TEXT, gfArticleStore } from 'goldfish'

import { TopStories } from 'shared/components/TopStories/TopStories';
import { LatestStores } from 'shared/components/LatestStores/LatestStores';
import { Loader } from 'shared/components/Common'

export default class HomePage extends React.Component {
  render() {

    return (
      <Page title={TEXT.title} className="home-page">
        <Section className="home-page__wrapper">

          <TopStories className="col-sm-6 col-xs-12"/>

          <LatestStores title={TEXT.latestStores} className="col-sm-6 col-xs-12"/>

        </Section>

      </Page>
    )
  }
}
