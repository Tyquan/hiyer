const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./client/src/index.html",
	filename: "./index.html"
});

module.exports = (env) => {
	return {
		entry: './client/src/index.js',
		output: {
	      path: path.join(__dirname, 'client', 'dist'),
	      filename: 'index.js'
	    },
	    module: {
	    	rules: [
	    		{
	    			test: /\.js$/,
	    			exclude: /node_modules/,
	    			loader: "babel-loader"
	    		},
	    		{
	    			test: /\.css$/,
	    			use: [
	    				{
	    					loader: "style-loader"
	    				}, 
	    				{
	    					loader: "css-loader",
	    					options: {
	    						modules: true,
	    						importLoaders: 1,
	    						localIdentName: "[name]_[local]_[hash:base64]",
	    						sourceMap: true,
	    						minimize: true
	    					}
	    				}
	    			]
	    		}
	    	]
	    },
	    plugins: [htmlPlugin]
	};
};