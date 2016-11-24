  var app = require('koa')()
  var router = require('koa-router')()
  var views = require('koa-views')
  var path = require('path')
  var pageRouteMap = require('./routers/pageCtl.js')
  var interfaceRouteMap = require('./routers/interfaceCtl.js')
  // http://taobaofed.org/blog/2016/03/18/error-handling-in-koa/
  // app.use(error info)
  // 错误处理在最上面 -->待完善
  app.use(views(path.resolve('server/views'), {
      map: {html: 'ejs'}
  }))
  interfaceRouteMap(router)
  pageRouteMap(router)
  // 使用路由
  app.use(router.routes())
  app.listen(1337)
  console.info('Now running on localhost:1337')
