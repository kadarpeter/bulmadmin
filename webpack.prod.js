const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].css",
      allChunks: true,
    }),
  ]
});