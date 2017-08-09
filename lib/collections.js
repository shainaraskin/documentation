const collections = require('metalsmith-collections')

module.exports = collections({
	'Getting Started': {
		pattern: 'getting-started/**/*.md',
		refer: false,
		metadata: {}
	}
})
