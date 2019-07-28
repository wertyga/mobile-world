import Link from 'next/link'

export default class Phones extends React.Component {
  render() {
    return (
      <div className="phones">
        <h1>PHONES</h1>
        <Link href="/"><a>HOME</a></Link>
      </div>
    );
  }
}