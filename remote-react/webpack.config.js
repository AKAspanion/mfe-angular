const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  devServer: {
    static: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
    liveReload: true,
    port: 4220,
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'esbuild-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Bootstrap': './src/bootstrap',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
