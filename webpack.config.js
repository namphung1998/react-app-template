const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    compress: true,
    open: false,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: path.join(__dirname, "build", "index.html"),
    }),
  ],
};
