// https://segment.com/blog/building-technical-documentation-with-metalsmith/

const Metalsmith = require('metalsmith')
const headings = require('metalsmith-headings')
const inline = require('metalsmith-in-place')
const permalinks = require('metalsmith-permalinks')
const autoprefixer = require('metalsmith-autoprefixer')
const assets = require('metalsmith-assets')

const watch = require('./lib/watch')
const collections = require('./lib/collections')
const markdown = require('./lib/markdown')
const layouts = require('./lib/layouts')

// Environment Variables
const {
	NODE_ENV = 'production',
	SOURCE = './docs',
	DESTINATION = './build'
} = process.env


Metalsmith(__dirname)
	.metadata({
		environment: NODE_ENV
	})
	.source(SOURCE)
	.ignore(['**/.git', '.gitignore', '.tmp', 'README.md'])
  .destination(DESTINATION)
  .clean(true)
	.use(watch(NODE_ENV))
	.use(collections)
	.use(markdown)
	.use(headings('h2'))
	.use(permalinks())
	.use(layouts)
	.use((files, metalsmith, done) => {
		// console.log(files, metalsmith)
		done()
	})
	.use(autoprefixer())
	.use(assets({ source: './assets', destination: './assets' }))
	.build(err => {
		if (err) throw err
	})
