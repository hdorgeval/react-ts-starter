import {Configuration} from 'webpack';
import {join} from 'path';

const config: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/app/main.tsx'
    },
    output: {
        path: join(__dirname,'public'),
        filename: 'build/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    }
}

export default config;