  var path = require('path')
	var pageJsonConfig = require('./pageConfig/app.json')

	function pageRouteMap (router) {
		for (var variable in pageJsonConfig) {
			if (pageJsonConfig.hasOwnProperty(variable)) {
				router.get(variable, function*(next) {
					var routePath = path.join(__dirname, './pageConfig', pageJsonConfig[variable])
					yield this.render('index', {
						template: routePath
					})
				})
			}
		}
	}

	module.exports = pageRouteMap
