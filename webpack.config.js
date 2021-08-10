const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve("./", ''),
    filename: "script.js"
  },
  resolve: {
    extensions: [".ts", ".tsx"], // "js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /favicon\.ico$/,
        type: 'asset/resource',
        generator: {
            filename: '[name][ext]',
        }
      }
    ]
  }
};
