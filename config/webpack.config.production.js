const path = require("path");
const moment = require("moment");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const alias = require("./alias");
const chunks = require("./chunks");

module.exports = {
  mode: "production",
  entry: {
    index: ["./src/index.js"],
  },
  output: {
    path: path.resolve(path.dirname(__dirname), "assets"),
    filename: "[name].[fullhash].bundle.js",
    publicPath: "/",
    chunkFilename: "[name].[id].js",
  }, // output
  resolve: {
    extensions: [".js", ".jsx"],
    alias: alias,
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      name: "vendor",
      cacheGroups: {
        // 优化: 把常用模块打包到独立的文件
        ...chunks,
      }, // cacheGroups
    }, // splitChunks
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (fileData) => {
            return `${fileData.filename}.LICENSE.txt${fileData.query}`;
          },
          banner: (licenseFile) => {
            return `${moment().format("YYYY-MM-DD HH:mm:ss")}. Copy right by JianXuan(Jack) Li. E-mail: liujin834@gmail.com
License information can be found in ${licenseFile}`;
          },
        },
      }),
    ],
  }, //optimization
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: "babel-loader" }],
        include: path.join(path.dirname(__dirname), "src"),
        exclude: /node_modules|zip/,
      }, //JSX and JS -> babel-loader

      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },

      {
        test: /\.less$/,
        exclude: /node_modules|zip/,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "less-loader" },
        ],
      }, // less -> css

      {
        test: /antd\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {},
                javascriptEnabled: true,
              },
            },
          },
        ],
      }, // less -> css

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      }, // Images -> url
    ], // rules
  }, // module
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
      hash: true,
    }), // HTML plugin - index
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      MAPBOX_TOKEN: JSON.stringify(process.env.MAPBOX_TOKEN),
      GEOSERVER_URL: JSON.stringify(process.env.GEOSERVER_URL),
      PATH_PREFIX: JSON.stringify(process.env.GEOSERVER_URL),
      API_HOST: JSON.stringify(process.env.API_HOST),
      API_PREFIX: JSON.stringify(process.env.API_PREFIX),
    }), // Define plugin
    new MiniCssExtractPlugin({
      chunkFilename: "[name].[hash].bundle.css",
      filename: "[name].css",
    }), // MiniCssExtractPlugin
    // new BundleAnalyzerPlugin(), //BundleAnalyzerPlugin
  ], //plugins
  performance: {
    hints: false,
  },
};
