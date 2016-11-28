	var _selfError = require('../util/errorDefine.js')

	function handleFunc (e) {
		var status = (e && e.status) || this.status
		var message = (e && e.message) || ''
		if (e instanceof _selfError.JsonError) {
			this.body = {
				'status': status,
				'message': message
			}
			if (this.status === 500) {
					// this.app.emit('error', e, this)
				}
			return
		} else {
			// this.render('')
		}
	}

	function* errorMiddleware (next) {
		try {
			yield * next
			handleFunc.call(this)
		} catch (e) {
			handleFunc.call(this, e)
		}
	}
	module.exports = errorMiddleware
