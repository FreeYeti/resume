const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const alias = require("./alias");
const chunks = require("./chunks");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    index: ["react-hot-loader/patch", "./src/index.js"],
  },
  output: {
    path: path.resolve(path.dirname(__dirname), "assets"),
    filename: "[name].[fullhash].dev.js",
    publicPath: "http://localhost:9000/assets/",
    chunkFilename: "[name].[id].dev.js",
  }, // output
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      ...alias,
    },
    mainFields: ["module", "main"],
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
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules|zip/,
      }, //JSX and JS -> babel-loader

      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },

      {
        test: /\.less$/,
        exclude: /zip/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "less-loader",
          }, // less-loader
        ], // ues
      }, // less -> css

      {
        test: /antd\.less$/,
        use: [
          { loader: "style-loader" },
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
      }, // antd.less -> css

      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/i,
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
    new ESLintPlugin({
      context: path.join(path.dirname(__dirname), "src"),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
      hash: true,
    }), // HTML plugin - portal
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      MAPBOX_TOKEN: JSON.stringify(process.env.MAPBOX_TOKEN),
      GEOSERVER_URL: JSON.stringify(process.env.GEOSERVER_URL),
      PATH_PREFIX: JSON.stringify(process.env.GEOSERVER_URL),
      API_HOST: JSON.stringify(process.env.API_HOST),
      API_PREFIX: JSON.stringify(process.env.API_PREFIX),
    }), // Define plugin
  ], //plugins
  devServer: {
    allowedHosts: "all",
    bonjour: true,
    bonjour: {
      type: "http",
      protocol: "udp",
    },
    historyApiFallback: {
      rewrites: [{ from: /^\//, to: "/assets/index.html" }], // rewrites
    },
    static: {
      directory: path.join(__dirname, "../static"),
      publicPath: "/statics",
      serveIndex: true,
    },
    compress: true,
    hot: true,
    port: 9000,
    host: "0.0.0.0",
  }, // devServer
};
