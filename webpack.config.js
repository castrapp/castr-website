const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var baseDirectory = __dirname; //js
var buildPath = path.resolve(baseDirectory, './build');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',  // Source maps for easier debugging
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true, // Ensure CSS files are written to disk
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Inject CSS into the DOM
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,  // Enable source maps
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
