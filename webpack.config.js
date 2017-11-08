var config = {
		entry: './main.js',
		output: {
			filename:'bundle.js',
		},
		devServer: {
			inline: true,
			port:8080
		},
		module : {
			loaders :[
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',

					query: {
						presets: ['es2015','react',"stage-0"]
					}
				}
			]
		}
	}

	module.exports = config;