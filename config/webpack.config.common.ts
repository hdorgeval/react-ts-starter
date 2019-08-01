import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';

const projectDirectory = join(__dirname, '..');

const config: Configuration = {
  entry: {
    app: join(projectDirectory, 'src/app/index.tsx'),
  },
  output: {
    path: join(projectDirectory, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(projectDirectory, 'src/app/index.html'),
      inject: 'body',
      react: `react@${process.env.npm_package_dependencies_react}`,
      reactDOM: `react-dom@${process.env.npm_package_dependencies_react_dom}`,
    }),
  ],
};

export default config;
