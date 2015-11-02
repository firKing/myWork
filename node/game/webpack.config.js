var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //插件项
    plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
    //页面入口文件配置
    entry: {
        index : './src/js',
        style: './src/css/style.css'
    },
    //入口文件输出配置
    output: {
        path: 'build/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        // root: '', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            // AppStore : 'js/stores/AppStores.js',
            // ActionType : 'js/actions/ActionType.js',
            // AppAction : 'js/actions/AppAction.js'
        }
    }
};