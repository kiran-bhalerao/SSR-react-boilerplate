const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  stats: "errors-only",
  mode: "development",
  entry: `./src/client/index.js`,
  output: {
    filename: "bundle.client.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new NodemonPlugin() // Dong
  ]
};

module.exports = merge(baseConfig,config);
