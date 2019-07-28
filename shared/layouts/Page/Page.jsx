import Head from 'next/head'

import { MenuWrapper } from 'shared/components/MainMenu/MenuWrapper'

import './page.sass'

export class Page extends React.Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    const { className, title, description, children, style = {}, withoutMenu } = this.props
    return (
      <div className={cn(
        'page-wrapper',
        className,
      )}
           style={style}
      >
        <Head>
          {title && <title>{title}</title>}
          {(description || title) && <meta name="description" content={description || title}/>}
        </Head>
        <div className="page-banner">
          <img src="/static/images/imgad.jpeg" alt="banner" />
        </div>
        {!withoutMenu && <MenuWrapper />}

        {children}
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.any,
  title: PropTypes.string,
  meta: PropTypes.node,
  children: PropTypes.any,
  withoutMenu: PropTypes.bool,
}