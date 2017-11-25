import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    loaders: [
      {
          test: /\.js$/,
          include: path.join(__dirname, 'client'),
          loaders: [ 'react-hot-loader/webpack', 'babel-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  }
}
