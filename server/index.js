  var app = require('koa')()
  var router = require('koa-router')()
  var views = require('koa-views')
  var path = require('path')
  var koaBody = require('koa-body')
  var pageRouteMap = require('./routers/pageCtl.js')
  var interfaceRouteMap = require('./routers/interfaceCtl.js')
  var errorHandle = require('./common/errorHandle/errorMiddleware.js')
  app.use(errorHandle)
  app.use(koaBody({
      formidable: {
          uploadDir: __dirname
      }
  }))
  app.use(views(path.resolve('server/views'), {
      map: {
          html: 'ejs'
      }
  }))
  interfaceRouteMap(router)
  pageRouteMap(router)
      // 使用路由
  app.use(router.routes())
  app.listen(1337)
  console.info('Now running on localhost:1337')
