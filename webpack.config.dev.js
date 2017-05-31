import path from 'path';

export default {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: '/'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			include: path.join(__dirname, 'src'),
			loaders: ['babel']
		},
		 { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
}
