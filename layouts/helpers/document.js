const {basename, extname} = require('path')
const unslug = require('unslug')
const Handlebars = require('handlebars')

module.exports = {

	documentTitle: (doc, options) => {
		if (doc.title) return doc.title
		const path = doc.path
		const base = basename(path, extname(path))
		return unslug(base)
	},

	isActivePath: (path1, path2, options = {}) => {
		const data = Handlebars.createFrame(options.data)
		data.custom = 'asdf'
		return path1 == path2 ? options.fn(this, data) : options.inverse(this, data)
	}

}
