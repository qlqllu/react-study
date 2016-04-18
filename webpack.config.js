var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
    lib: [
      'react',
      'react-dom'
    ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"lib", /* filename= */"lib.js")
  ]
};