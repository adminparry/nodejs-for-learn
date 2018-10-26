module.exports = {
	plugins:[
		// split vendor js into its own file
		new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: function (module, count) {
	        // any required modules inside node_modules are extracted to vendor
	        return (
	          module.resource &&
	          /\.js$/.test(module.resource) &&
	          module.resource.indexOf(
	            path.join(__dirname, '../node_modules')
	          ) === 0
	        )
	      }
	    }),
	    // extract webpack runtime and module manifest to its own file in order to
    	// prevent vendor hash from being updated whenever app bundle is updated
	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'manifest',
	      minChunks: Infinity
	    }),
	    // This instance extracts shared chunks from code splitted chunks and bundles them
	    // in a separate chunk, similar to the vendor chunk
	    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'app',
	      async: 'vendor-async',
	      children: true,
	      minChunks: 3
	    }),
	]
}