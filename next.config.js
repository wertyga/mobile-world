const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const { getEnvies } = require('./assets/envs/envs');

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ['assets/css'],
  },
  distDir: 'PROD',
  webpack: (config, { webpack, defaultLoaders }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types',
        cn: 'classnames',
        inject: ['mobx-react', 'inject'],
        observer: ['mobx-react', 'observer'],
        observable: ['mobx-react', 'observable'],
        _JSXStyle: ['styled-jsx', 'style'],
      }),
      new webpack.DefinePlugin({
        'process.env': getEnvies(),
      })
    );
    return config;
  },
});
