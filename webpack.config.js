const path = require('path');

module.exports = {
  entry: './server/app.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      url: require.resolve('url/'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      crypto: require.resolve('crypto-browserify'),
      async_hooks: require.resolve('async_hooks'),
      querystring: require.resolve('querystring-es3'),
      zlib: require.resolve('browserify-zlib'),
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
    alias: {
      'zlib': require.resolve('pako')
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
