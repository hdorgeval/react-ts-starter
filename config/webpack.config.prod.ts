import {Configuration} from 'webpack';
import merge from 'webpack-merge';
import webpackCommonConfig from './webpack.config.common';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const config: Configuration = merge(webpackCommonConfig,{
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle-analyzer-report.html'
        }),
    ]
});

export default config;