// 导入http模块:
var http = require('http')
var fs = require('fs')
// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
	// 回调函数接收request和response对象,
	// 获得HTTP请求的method和url:
	console.log(request.method + ': ' + request.url)
	// 将HTTP响应200写入response, 同时设置Content-Type: text/html:
	// 将HTTP响应的HTML内容写入response:
	let url = request.url
	if (url === '/favicon.ico') return
	if (url === '/data') {
		fs.readFile('./server/data.json', function(err, data) {
			if (!err) {
				response.writeHead(200, { 'Content-Type': 'application/json' })
				response.end(data)
			} else {
				throw err
			}
		})
	} else {
		console.log('错误')
	}
})
server.listen(8088)

console.log('Server is running at http://127.0.0.1:8088/')
