import { Page, Section } from 'shared/layouts'
import { HomePageText as TEXT } from 'goldfish'

import Link from 'next/link'

// import 'shared/styles/home-page.sass'

export default class HomePage extends React.Component {
  render() {
    return (
      <Page title={TEXT.title} className="home-page">
        <Section h1="HOME PAGE">
          <Link href="/about"><p>About</p></Link>
        </Section>
      </Page>
    )
  }
}
