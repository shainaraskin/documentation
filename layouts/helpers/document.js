const {basename, extname} = require('path')
const decamelize = require('decamelize')
const unslug = require('unslug')
const Handlebars = require('handlebars')

module.exports = {

	documentTitle: (doc, options) => {
		if (doc.title) return doc.title
		const path = doc.path
		const base = basename(path, extname(path))
		const slug = decamelize(base)
		return unslug(slug)
	},

	isActivePath: (path1, path2, options = {}) => {
		const data = Handlebars.createFrame(options.data)
		data.custom = 'asdf'
		return path1 == path2 ? options.fn(this, data) : options.inverse(this, data)
	}

}
