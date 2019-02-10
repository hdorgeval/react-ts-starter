import {Configuration} from 'webpack';
import {join} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const projectDirectory = join(__dirname, '..');

const config: Configuration = {
    entry: {
        app: join(projectDirectory,'src/app/index.tsx')
    },
    output: {
        path: join(projectDirectory,'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            template: join(projectDirectory,'src/app/index.html'),
            inject: 'body',
        } )
    ]
}

export default config;