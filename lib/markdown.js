const markdown = require('metalsmith-markdown')

module.exports = markdown({
	smartypants: true,
	smartLists: true,
	gfm: true,
	tables: true
})
