const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // loader: 'babel-loader',

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src'),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.js?$/

        // Options to configure babel with
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: './',
    watchContentBase: true,
    disableHostCheck: true
  }
};