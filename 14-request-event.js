
const http = require('http');

const server = http.createServer();     // emits request event, subscribe to it, listen for it, respond to it

// const server = http.createServer((req,res)=> {
//     res.end(`Welcome Back`);
// });


// Setup our server using Event Emitter API here instead
server.on('request', (req,res)=> {
    res.writeHead(200, { 'Content-Type': 'text/plain' });   
    res.end(`Welcome`);
});

server.listen(5000);



