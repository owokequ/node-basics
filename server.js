const http = require('http')
const EventEmitter = require('events')
const fs = require('fs');
const path = require('path');

const emitters = new EventEmitter();

// emitters.on('userConnected', ()=>{
//     fs.appendFile(path.join(__dirname, 'log.txt'), `\n${new Date()}`, ()=>{})
//     console.log('User connected');
    
// })   





PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"content-type":'text/html'})
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
    } else if(req.url === '/about'){
        res.writeHead(200, {"content-type":'text/html'})
        res.end('<h1>About project</h1>')
    }else{
        res.writeHead(404, {"content-type":'text/html'})
        res.end('<h1>Error 404, Not found</h1>')
    }
})


server.listen(PORT, ()=>{
    console.log('Сервер стартовал');
})