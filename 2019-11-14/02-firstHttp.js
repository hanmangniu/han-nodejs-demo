//引包 http模块
var http = require("http")

http.createServer(function(request,response){
    //发送HTTP头部信息 Http状态值200 内容类型 Text/plain
    response.writeHead(200,{'Content-Type':'Text/plain'})
    //发送响应数据 
    response.end('Hello World!')
//createServer 会返回一个对象 该对象有listen方法 里面参数指定http服务监听的端口号
}).listen(8888)

//终端打印
console.log('server running at http://localhost:8888')