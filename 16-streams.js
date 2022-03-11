
const { createReadStream } = require('fs');

// default 64kB at a time
// last buffer - remainder
// highWaterMark - control size used for buffer to read file instead of default 64kB
// const stream = createReadStream('./content/big.txt', { highWaterMark: 60000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 60000, 
    encoding: 'utf8'
});

stream.on('data', (chunk)=> {
    console.log('data stream reading: ' + chunk.length + ' bytes of data');
    // console.log(chunk);
});

stream.on('end', ()=> {
    console.log('End Event called');
});

stream.on('error', (err) => {
    console.log('stream.on error: ' + err);
});
