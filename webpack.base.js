module.exports = {
  // configure webpack to work with babel
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-react-jsx","@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};
