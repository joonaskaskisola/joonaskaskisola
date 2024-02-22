const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
	return {
		watch: false,
		mode: 'production',
		entry: {
			app: './src/js/app.jsx'
		},
		output: {
			filename: 'js/[name].bundle.js',
			path: path.resolve(__dirname, 'dist/')
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.jsx$/,
					use: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}, {
						loader: "sass-loader",
						options: {
							implementation: require("sass")
						}
					}]
				}
			]
		},
		plugins: [
			new CopyWebpackPlugin({
				patterns: [
					{
						context: './src/',
						from: '*.*',
						to: './',
					}
				]
			})
		]
	};
};
