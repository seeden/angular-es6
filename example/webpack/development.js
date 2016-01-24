import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import { development } from './config';
import path from 'path';

const compiler = webpack(development);
const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../build/'),
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  filename: 'bundle.js',
  publicPath: '/build/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

server.listen(9095, 'localhost', (err) => {
  if (err) {
    throw err;
  }
});
