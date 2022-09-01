const uglify = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    superVideo: "./lib/superVideo.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    filename: "[name].js",
    clean: true,
  },
  plugins: [new uglify()],
};
