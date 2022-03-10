
const { createReadStream } = require('fs');

// default 64kB at a time
// last buffer - remainder
// highWaterMark - control size used for buffer to read file instead of default 64kB
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 90000, 
    encoding: 'utf8'
});


stream.on('data', (result)=> {
    console.log('test: ' +  result);
});

stream.on('error', (err) => {
    console.log(err);
});
