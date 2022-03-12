

const { readFile, writeFile }  = require('fs');
// const util = require('util');                        // these 3 lines not needed because of "return new Promise" and use of resolve/reject
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = (path1, path2) => {

    return new Promise((resolve, reject)=> {
        console.log('1... ');
        // const first = await readFile(path1, 'utf8');
        readFile(path1, 'utf8', (err,data) => {
            console.log('2... ');
            if (err) { 
                reject('[*** ' + err + ' ***]');
            }
            else {
                resolve(data);      
            }
            console.log('3...');
        });
    });
};

console.log('before start()');

start('../content/first.txt', '../content/second.txt')
    .then((result) => { 
        console.log('*** RESOLVED: ' + result);
    })
    .catch((err) => { 
        console.log('*** REJECTED: ' + err);
    });

console.log('after start()');

