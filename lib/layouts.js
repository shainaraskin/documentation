const layouts = require('metalsmith-layouts')
const registerHelpers = require('metalsmith-register-helpers')

const registerHelpersOptions = {
	directory: 'layouts/helpers'
}

const layoutOptions = {
	engine: 'handlebars',
	default: 'default.hbs',
	partials: 'layouts/partials',
	pattern: "**/*.html"
}

module.exports = function(files, metalsmith, done) {
	registerHelpers(registerHelpersOptions)(files, metalsmith, () => {
		layouts(layoutOptions)(files, metalsmith, done)
	})
}
