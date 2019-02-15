const merge = require("webpack-merge");
const webpackCommonConfig = require("./webpack.common.js");

module.exports = merge(webpackCommonConfig, {
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    historyApiFallback: true
  }
});
