const path = require("path");

module.exports = {
  "@utils": path.resolve(__dirname, "../src/utils"),
  "@src": path.resolve(__dirname, "../src"),
  "@statics": path.resolve(__dirname, "../src/statics"),
  "@map": path.resolve(__dirname, "../src/app/Home/Map"),
  "@olmap": path.resolve(__dirname, "../src/module/map"),
  "@img": path.resolve(__dirname, "../src/app/img"),
  "@reducers": path.resolve(__dirname, "../src/store/reducers"),
};
