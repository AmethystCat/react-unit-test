var webpack = require('webpack'),
    path = require('path');

var config = {
    entry : [
        'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:3000',
	'./src/main.js'
    ],
    resolve: {
        root : [
            path.resolve(__dirname,'./src')
        ],
	    extensions : ['','.js','.json','.jsx']
    },
    output : {
        path : path.resolve(__dirname,'dist'),
	    filename : 'bundle.js'
    },
    module : {
        loaders : [
	    {
	        test : /\.js?$/, loaders : ['babel'], exclude : /node_modlues/
	    }
	]
    }
}


module.exports = config;
