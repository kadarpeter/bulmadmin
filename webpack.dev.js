const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "_site"),
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].css",
      allChunks: true,
      disable: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:9000/',
      files: [{
          match: [
              '_site/**/*.html'
          ],
          fn: function(event) {
              if (event === "change") {
                  const bs = require('browser-sync').get('bs-webpack-plugin');
                  bs.reload();
              }
          }
      }]
    }, {
      reload: false,
    })
  ]
});