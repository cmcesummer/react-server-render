const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    mode: "development",
    entry: {
        main: resolve("../src/index.js"),
        vendor: ["react", "react-dom", "react-router-dom"]
    },
    output: {
        path: resolve("../dist/client"),
        filename: "js/[name].[chunkhash].js",
        publicPath: "/"
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            filename: resolve("../dist/client/index.html"),
            template: resolve("../public/index.html"),
            inject: true
        })
    ],
    devServer: {}
};
