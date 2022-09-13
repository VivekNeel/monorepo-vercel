const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Speed = require("speed-measure-webpack-plugin")

const smp = new Speed()
const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  caches : {
    type: 'filesystem',
  }
};

module.exports = smp.wrap(config);
