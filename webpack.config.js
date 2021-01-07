
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
            },
            { 
              test: /\.(png|jpe?g|gif)$/i,
              loader: "url-loader?name=src/assets/bio-photos/[name].[ext]"
            },
        ],
    },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    },
    watch: true
};