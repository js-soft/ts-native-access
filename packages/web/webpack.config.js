const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // Change to your "entry-point".
    mode: "development",
    node: {
        global: false
    },
    entry: {
        "jss.native-web": "./dist/index",
        WebServiceWorker: "./dist/WebServiceWorker"
    },
    output: {
        path: path.resolve(__dirname, "lib-web"),
        filename: "[name].js",
        library: "JSSNativeWeb",
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            src: path.resolve(__dirname, "tmp-browser/src/")
        }
    },
    devtool: "source-map",
    externals: {
        bson: "BSON",
        lokijs: "loki",
        pako: "pako"
    }
};
