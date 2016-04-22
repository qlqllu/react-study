var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
    lib: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux',
      'immutable',
      'react-addons-pure-render-mixin'
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
  debug: true,
  devtool: "#inline-source-map",
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