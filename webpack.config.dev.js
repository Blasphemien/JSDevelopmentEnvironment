/**
 * Created by keilc on 1/04/2017.
 */
import path from 'path';

export default {
    /*debug: true,*/
    devtool: 'inline-source-map',
    /*noInfo: false,*/
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
}