// const fs = require('fs');
// const readFile = fs.readFile('./content/first.txt', 'utf8', (err)=> { 
//     console.log('hello');
// });



// Example 1:
const { readFile } = require('fs').promises;            // Must use a .promises for the await readLines below because: 
                                                        //  an await makes a function wait for a promise

// const getText = function(path) {
// const getText = (path) => {
const getText = async(path) => {
    console.log('1..');
    return new Promise(async (resolve, reject)=> {
        console.log('2..');
        await readFile(path, 'utf8',(err, data)=> {
            console.log('3..');
            if (err) {
                reject(' Rejected error: ' + err);
            } else {
                resolve(' Resolved data: ' + data);
            }
        });
    });
};

console.log(getText);

getText('./content/first.txt')
    .then((result)=> console.log(' Then: ' + result))
    .catch((err)=> console.log(' Catch: ' + err));



// Now Lets write this information using async/await function:
// const { writeFile }  = require('fs').promises;                      // Must use a .promises for the await readLines below because: 
//                                                                     //  an await makes a function wait for a promise

const fs = require('fs').promises;

const start = async() => {
    try {
        console.log('started at the try block');
        console.log('1...');
        const first = await readFile('./content/first.txt', 'utf8');
        console.log('2...');
        const second = await readFile('./content/second.txt', 'utf8');
        // const first = await getText('./content/first.txt');
        // // console.log('First parameter is : ' + first);
        // const second = await getText('./content/second.txt');
        // console.log('Second parameter is : ' + second);

        console.log('3...');
        // await fs.writeFile('./content/result-mind-blown.txt', `This is AWESOME : ${ first } : ${ second }`, {flag: 'w'}, (err)=> {
        //      if (err) {
        //          console.log(err);
        //      }
        //  });
        await fs.writeFile(
             './result-mind-blown.txt',
             `This is AWESOME : ${first} : ${second}`,
             { flag: 'w' }
        );
        console.log('4... ending the try block');
    } catch (error) {
        console.log('[*** ' + error + ' ***]');             // This error is actually everything in the reject(err) above
    }
};

console.log('before start()');
start();
console.log('after start()');
