const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 封装处理html文件的方法，获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title){
  return {
      template    : './src/view/' + name + '.html',
      filename    : 'view/' + name + '.html',
      favicon     :  './favicon.ico',
      title       : title,
      // js文件引入位置，true 表示在body底部
      inject      : true,
      hash        : true,
      // 多入口文件设置
      chunks      : ['common', name]
  };
};

var config = {
  //入口文件
  entry: {
    'common': ['./src/page/common/index.js'],
    'index': ['./src/page/index/index.js'],
    'login': ['./src/page/login/login.js'],
  },
  //出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },

  // 全局使用jquery
  externals: {
    'jquery': 'window.jQuery'
  },

  // 找到原文件的错误
  devtool: 'inline-source-map',

  // 服务器配置
  devServer: {

  },
  // 插件配置
  plugins: [
    // 独立通用模块 css
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    // html模板的处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
  ],

  // 模块配置
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }]
  },


  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common',
          filename: 'js/base.js'
        }
      }
    }
  }
};

// if('dev' === WEBPACK_ENV){
//   config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
// }

module.exports = config;