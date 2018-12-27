const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/tax-calculation.js', // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: "main.js"       // название создаваемого файла
  },
  module: {

    rules: [   //загрузчик для src
      {
        test: /\.js?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options: {
          // presets: ["env", "react"],    // используемые плагины
          // plugins: [ 'transform-object-rest-spread' ]
        }
      },
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract(
        //   {
        //     fallback: 'style-loader',
        //     use: ['css-loader']
        //   }
        // ),
        use: ['style-loader', 'css-loader']
        // loader: [
        //   // require.resolve('style-loader'),
        //   // require.resolve('css-loader')
        // ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      publicPath: '/public/',
      filename: 'style.css'})
  ]
  // devtool: 'source-map'
};