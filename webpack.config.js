module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ['@babel/preset-env'],
                        "plugins": [
                            [
                                "@babel/plugin-transform-react-jsx", {
                                    pragma: 'createElement'
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        open: true,
        port: 8080,
        contentBase: './dist'
    },
    mode: "development",
    devtool: 'source-map'
}