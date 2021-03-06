const path = require("path");
const entryPath = ".";

module.exports = {
  entry: `./${entryPath}/js/app.js`,

  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
  },

  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    open:true // opening browser on 'npm start'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
