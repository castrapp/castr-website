const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Import this
var baseDirectory = __dirname; //js
var buildPath = path.resolve(baseDirectory, './build');

module.exports = {
  entry: './src/index.jsx',
  // context: baseDirectory,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/',  // Add this for proper URL handling
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
        test: /\.css$/,  // Replace style-loader with MiniCssExtractPlugin
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into separate files
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
    new MiniCssExtractPlugin({
      filename: '[name].css',  // Output CSS files with original names
    }),
  ],
};
