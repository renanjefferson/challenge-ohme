module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /.*\.(png|svg|jpg|gif)$/i,
        use: { loader: "file-loader" },
      },
    ],
  },
};
