var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/index.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src/js')]}
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