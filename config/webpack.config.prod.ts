import {Configuration} from 'webpack';
import merge from 'webpack-merge';
import webpackCommonConfig from './webpack.config.common';

const config: Configuration = merge(webpackCommonConfig,{
    mode: 'production',
});

export default config;