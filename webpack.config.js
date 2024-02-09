const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/TypeAnotation/exercicio/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig-Frontend.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },
  devtool: "source-map",
};
