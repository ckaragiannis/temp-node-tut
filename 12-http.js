
const http = require('http');

const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.write('Welcome to our HomePage');
        res.end();
    }
    else if (req.url === '/about') {
        res.end(`Here is our Short History`);
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>`);
    }
});

server.listen(5000);

