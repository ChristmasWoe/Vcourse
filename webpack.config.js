const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    entry: ['core-js', 'babel-polyfill', 'isomorphic-fetch', 'formdata-polyfill', resolveAppPath('src')],
    output: {
        path: path.resolve('build'),
        filename: '[name].bundle.js',
        publicPath: '/',
        globalObject: 'this',
    },
    devServer: {
        static: {
            directory: resolveAppPath('public'),
            publicPath: '/',
            watch: true,
        },
        open: true,
        compress: false,
        port: 3000,
        host: 'localhost',
        // allowedHosts: ['.myoffice-app.ru'],
        hot: true,
        // webSocketServer: false,
    },
    resolve: {
        fallback: {
            fs: 'empty',
            // crypto: require.resolve('crypto-browserify'),
            // buffer: require.resolve('buffer/'),
            // stream: require.resolve('stream-browserify'),
            // http: require.resolve('stream-http'),
            // https: require.resolve('https-browserify'),
            // os: require.resolve('os-browserify/browser'),
            // path: require.resolve('path-browserify'),
            // tty: require.resolve('tty-browserify'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('public/index.html'),
            // favicon: resolveAppPath("public/favicon.ico")
        }),
        new webpack.SourceMapDevToolPlugin({}),
        new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
        // new CopyWebpackPlugin({
        // 	patterns: [
        // 		// {
        // 		// 	from: 'public/static/',
        // 		// 	to: 'static/',
        // 		// },

        // 	],
        // }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/react', {
                            "runtime": "automatic"
                        }],
                        {
                            plugins: ['@babel/plugin-proposal-class-properties', '@babel/transform-async-to-generator'],
                        },
                    ],
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                include: [/templates/],
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                include: [/FileTypes/],
                loader: 'svg-url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
                test: /\.svg$/,
                include: [/icons/],
                use: ['@svgr/webpack', 'svg-url-loader'],
            },
            {
                test: /\.svg$/,
                include: [/svgAsReact/],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true, // true outputs JSX tags
                        },
                    },
                ],
                // loader: "react-svg-loader",
            },
            {
                test: /\.svg$/,
                exclude: [/FileTypes/, /icons/, /svgAsReact/],
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        loader: 'svg-inline-loader',
                        options: {
                            // Optional svgo options
                            svgo: {
                                plugins: [{ removeViewBox: false }],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    ignoreWarnings: [/Failed to parse source map/],
};
