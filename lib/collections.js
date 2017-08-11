const collections = require('metalsmith-collections')

module.exports = collections({
	'Getting Started': {
		pattern: 'getting-started/**/*.md',
		refer: false,
		metadata: {
			slug: 'getting-started'
		}
	},
	'Examples': {
		pattern: 'examples/**/*.md',
		refer: false,
		metadata: {
			slug: 'examples'
		}
	}
})
