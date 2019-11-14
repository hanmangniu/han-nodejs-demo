//NodeJs 的异步编程直接体现就是回调

var fs = require('fs')

//阻塞 是按顺序执行
var data1 = fs.readFileSync('text.txt')
console.log(data1.toString())
console.log('程序第一次读取执行完毕')

//非阻塞 是不需要按顺序执行
fs.readFile('text.txt',function(err,data2){
    if(err){
        return console.error(err)
    }
    console.log(data2.toString())
})
console.log('程序第二次读取执行完毕')