const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/',
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:/\.vue$/,
        use:[{
          loader: 'vue-loader',
        }],
      }
    ],
  },
  resolve:{
    extensions:['.js', '.css', '.vue'],
    //alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归Alex所有'),
    new htmlWebpackPlugin({
      template:'index.html',
    }),
  ],
}