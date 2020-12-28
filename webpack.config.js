
module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader', 'css-loader', 'sass-loader'
              ]
            }
        ],
    },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    },
    watch: true
};