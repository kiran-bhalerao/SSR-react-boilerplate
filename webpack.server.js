const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding
const nodeExternals = require('webpack-node-externals');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  stats: "errors-only",
  mode: "development",
  entry: `./src/server/index.js`,
  target: "node",
  output: { filename: "bundle.server.js" },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new NodemonPlugin() // Dong
  ],
};

module.exports = merge(baseConfig,config);
