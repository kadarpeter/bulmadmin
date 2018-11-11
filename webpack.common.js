const path               = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/js/index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["_site/css", "_site/js"]),
  ],
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "_site"),
  }
};
