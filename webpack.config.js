const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].[contenthash]-${Date.now()}.js`,
        publicPath: './'
    },
    devServer: {
        port: 3030,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html", // to import index.html file inside index.js
      }),
    ],
};