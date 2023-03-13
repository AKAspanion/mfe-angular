const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const deps = require('./package.json').dependencies;

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      watchFiles: ['src/**/*'],
      historyApiFallback: true,
      liveReload: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'vue_remote',
        filename: 'remoteEntry.js',
        exposes: {
          './Bootstrap': './src/bootstrap',
        },
        shared: {
          ...deps,
          vue: { singleton: true, requiredVersion: deps.vue },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
