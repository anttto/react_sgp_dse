const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Path Config
const PROJECT_ROOT = path.resolve(__dirname);
const PUBLIC_INDEX = path.resolve(PROJECT_ROOT, "public", "index.html");
const SRC_PATH = path.resolve(__dirname, "src");
const BUILD_PATH = path.resolve(PROJECT_ROOT, "build");

module.exports = {
  name: "DOSAEUN_ReactWebpack",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  entry: path.resolve(SRC_PATH, "index.jsx"),

  output: {
    path: BUILD_PATH,
    filename: "assets/js/bundle.[contenthash:8].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[hash][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[name].[hash][ext]",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PUBLIC_INDEX,
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      // chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/favicon", to: "assets/favicon" },
        { from: "public/data", to: "data" },
      ],
    }),
    new Dotenv(),
  ],

  devServer: {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
