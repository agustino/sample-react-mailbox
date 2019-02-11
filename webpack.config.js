const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    mailbox: './src/Mailbox.js',
    app: './app/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mailbox App',
      chunks: ['app'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
