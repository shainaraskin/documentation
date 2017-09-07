const readDir = require('fs').readdirSync
const stat = require('fs').statSync
const resolve = require('path').resolve
const collections = require('metalsmith-collections')
const decamelize = require('decamelize')
const unslug = require('unslug')

module.exports = function (files, metalsmith, done) {
	const dirs = readDir(resolve(metalsmith._directory, metalsmith._source)).filter(file => {
		if (file.startsWith('.')) return false
		return stat(resolve(metalsmith._directory, metalsmith._source, file)).isDirectory()
	})
	const collects = dirs.reduce((prev, dir) => {
		return Object.assign({}, prev, {[unslug(dir)]: {
			pattern: `${dir}/**/*.md`,
			refer: false,
			metadata: {
				slug: dir
			}
		}})
	}, {})
	return collections(collects).call(this, files, metalsmith, done)
}
