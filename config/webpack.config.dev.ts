import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import webpackCommonConfig from './webpack.config.common';

const config: Configuration = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8020,
  },
});

export default config;
