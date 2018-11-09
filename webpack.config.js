const path = require('path'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  port = process.env.port || 3001,
  config = {
    entry: [
      path.resolve(__dirname, 'src/index.js'),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      /*解决其他外部ip可以访问*/
      host: '0.0.0.0',
      port,
      inline: true,
      // progress: true,
      //公司
      // public:`172.20.35.92:${port}`
      // home
      // public:`192.168.1.101:${port}`
    },
    resolve: {
      /*解决导入不带后缀*/
      extensions: ['.js', '.less'],
      enforceExtension: false,
      alias: {
        Common: path.join(__dirname, './common'),
        Utils: path.join(__dirname, './common/utils'),
      },
    },
    module:
    {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
              plugins: [
                'react-hot-loader/babel',
                'transform-runtime',
                'transform-class-properties',
                  // decorators支持，需要顺序
                'transform-decorators-legacy',
                'transform-decorators',
              ],
              presets: ['stage-0', 'react', 'env'],
            },
          },
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')(),
                ],
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 2500,
          },
        },
        {
          test: /\.(woff|woff2|svg|otf|eot|ttf)$/,
          loader: 'file-loader',
          options: {
            limit: 0,
          },
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({url: `http://localhost:${port}/#/`}),
      new HtmlWebpackPlugin({
        title: '志勇的app',
        template: 'src/template.ejs',
      }),
    ],
  }
  ;

module.exports = config;
