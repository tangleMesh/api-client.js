import path from 'path';

export default {
    mode: 'production',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'api-client.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};