const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/js/index.js"),
  output: {
    path: path.join(__dirname, "dist/js"),
    library: 'extension',
    libraryTarget: 'var',
    filename: "index.js"
  },
  resolve: {
    alias: {
       style: path.resolve(__dirname, 'src/style/'),
       jsx: path.resolve(__dirname, 'src/jsx/'),
       imgs: path.resolve(__dirname, 'src/imgs/'),
       ui: path.resolve(__dirname, 'src/ui/'),
       js: path.resolve(__dirname, 'src/js/')
    }
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
