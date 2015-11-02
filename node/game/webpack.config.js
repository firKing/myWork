var webpack = require('webpack');
var path = require('path');

module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/index.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    root: [path.resolve(__dirname)],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};