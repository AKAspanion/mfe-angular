const { EsbuildPlugin } = require('esbuild-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    output: {
      filename: '[name].[contenthash].js',
      publicPath: 'auto',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    optimization: isProd
      ? {
          minimizer: [new EsbuildPlugin({ css: true })],
        }
      : {},
    devServer: {
      static: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      watchFiles: ['src/**/*'],
      historyApiFallback: true,
      liveReload: true,
      hot: false,
      port: 4220,
    },
    module: {
      rules: [
        {
          test: /\.(css|s[ac]ss)$/i,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
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
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        ignoreOrder: true,
      }),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
