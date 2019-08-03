import webpackCommonConfig from './webpack.config.common';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';

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
