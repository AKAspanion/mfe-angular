const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'shell',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
        '@ngxs/store': { singleton: true, eager: true },
        'mdmf-shared': { singleton: true, eager: true },
      },
    }),
  ],
};
