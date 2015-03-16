var webpack = require('webpack');
var extend = require('node.extend');
var path = require('path');

var production = exports.production = {
	entry:  {
		app: [path.resolve(__dirname, 'app/main.js')],
		vendor: ['angular', 'angular-route', 'angular-cookies']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /[\/]angular\.js$/, loader: "exports?angular" },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.less$/, loader: 'style!css!less' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules', 'modules']
	},	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
		new webpack.optimize.UglifyJsPlugin()
		
	],
	devtool: 'source-map'			
};


exports.development = extend({}, production, {
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
	],
	watch: true,
	//devtool: 'enum'
});
