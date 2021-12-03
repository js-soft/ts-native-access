const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    // Change to your "entry-point".
    mode: "production",
    node: {
        global: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ]
    },
    entry: {
        "jss.native-web.min": "./dist/index",
        "WebServiceWorker.min": "./dist/WebServiceWorker"
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
