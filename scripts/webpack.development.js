const webpack = require('webpack');

const config = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },
};

module.exports = config;
