const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    // Change to your "entry-point".
    mode: "production",
    target: "node",
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
        "jss.native-electron.min": "./dist/index",
        "ElectronServiceWorker.min": "./dist/ElectronServiceWorker"
    },
    output: {
        path: path.resolve(__dirname, "lib-web"),
        filename: "[name].js",
        library: "JSSNativeElectron",
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
        "fs-extra": "commonjs2 fs-extra",
        bson: "commonjs2 bson",
        lokijs: "commonjs2 lokijs",
        pako: "commonjs2 pako",
        path: "commonjs2 path",
        fs: "commonjs2 fs",
        os: "commonjs2 os",
        "mime-types": "commonjs2 mime-types",
        rimraf: "commonjs2 rimraf",
        "app-data-folder": "commonjs2 app-data-folder",
        "select-files": "commonjs2 select-files",
        keytar: "commonjs2 keytar",
        "push-receiver": "commonjs2 push-receiver",
        uuidv4: "commonjs2 uuidv4",
        systeminformation: "commonjs systeminformation",
        "uuid-by-string": "commonjs2 uuid-by-string",
        "node-notifier": "commonjs2 node-notifier",
        electron: "commonjs2 electron",
        dialogs: "commonjs2 dialogs"
    }
};
