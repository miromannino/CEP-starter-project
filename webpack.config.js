const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/js/index.js"),
  output: {
    path: path.join(__dirname, "dist/client"),
    library: 'extension',
    libraryTarget: 'var',
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
  devtool: "source-map"
};
