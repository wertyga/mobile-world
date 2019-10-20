import App, { Container } from 'next/app'
import _JSXStyle from 'styled-jsx/style';
import Head from 'next/head'

import { Provider } from 'mobx-react'
import { initializeStore } from 'store/store'
import { getStoresData } from 'shared/utils'

import globalStyle from 'assets/css/global.style';

const createBrowserHistory = require('history').createBrowserHistory; // eslint-disable-line

let history;
if (typeof document !== 'undefined') {
  history = createBrowserHistory();
}

class MobileWorldApp extends App {
  static async getInitialProps(appContext) {
    const { ctx: { req } } = appContext;
    const rootStore = initializeStore({
      cookiesStore: req ? req.headers.cookie : {},
      execContextStore: req ? req.headers['user-agent'] : {},
    });
    appContext.ctx.rootStore = rootStore;
    const appProps = App.getInitialProps(appContext);
    req && await getStoresData(req, rootStore);

    return {
      ...appProps,
      initialMobxState: rootStore && rootStore.toProps(),
    };
  }

  constructor(props) {
    super(props);

    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState, history).toProps();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <Provider {...this.mobxStore}>
          <Component {...pageProps} />
        </Provider>

        <style jsx global>{globalStyle}</style>
      </Container>
    );
  }
}

export default MobileWorldApp;
