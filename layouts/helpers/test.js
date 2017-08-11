module.exports = {
	JSONPrettyPrint: obj => {
		console.log(JSON.stringify(obj, null, 2))
		return
	},
	ObjectKeys: obj => {
		console.log(Object.keys(obj).join(', '))
		return
	},
	Log: (obj) => {
		console.log('////////////////////////////////////////////////////')
		console.log(obj)
		console.log('////////////////////////////////////////////////////')
		return
	}
}
