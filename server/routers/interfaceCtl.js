  var path = require('path')
  var fs = require('fs')

	function interfaceRouteMap (router) {
		var files = fs.readdirSync(path.join(__dirname, 'interfaceConfig'))
		files.map(function (file) {
			var routesfile = require(path.join(__dirname, 'interfaceConfig', file))
			for (var methodkey in routesfile) {
				if (routesfile.hasOwnProperty(methodkey)) {
					for (var routes in routesfile[methodkey]) {
						if (routesfile[methodkey].hasOwnProperty(routes)) {
							// console.log(routesfile[methodkey][routes]);
							router[methodkey](routes, routesfile[methodkey][routes])
						}
					}
				}
			}
		})
	}

	module.exports = interfaceRouteMap
