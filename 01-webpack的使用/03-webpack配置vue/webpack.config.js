const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
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
  }
}