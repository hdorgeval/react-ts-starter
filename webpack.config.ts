import {Configuration} from 'webpack';
import {join} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/app/index.tsx'
    },
    output: {
        path: join(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app/index.html',
            inject: 'body',
        } )
    ]
}

export default config;