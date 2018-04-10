const { resolve } = require('path')
const webpack = require('webpack')

const ROOT_PATH = resolve(__dirname)
const SRC_PATH = resolve(ROOT_PATH, 'src')
const DIST_PATH = resolve(ROOT_PATH, 'dist')

module.exports = {
  context: SRC_PATH,
  entry: SRC_PATH,
  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: DIST_PATH,
    publicPath: '/',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: [
          resolve(__dirname, './node_modules')
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}