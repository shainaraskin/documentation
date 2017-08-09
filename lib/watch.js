const watch = require('metalsmith-watch')

const config =

module.exports = function(env) {
	switch (true) {
		case (env === 'development' || env === 'dev'):
			return watch({
				paths: {
					"${source}/**/*": "**/*",
					"@(layouts|lib)/**/*": "**/*"
				},
				livereload: true
			})
		default: return function(){}
	}
}
