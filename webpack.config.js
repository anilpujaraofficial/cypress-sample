const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  // Other Webpack configuration...
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  // Other configurations...
};
