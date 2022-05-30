// entry point -> index.js in client folder
// the idea -> transform and bundle our index file, with a source map, into the public folder.
module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    mode: 'development'
};
