// const fs = require('fs');
// const readFile = fs.readFile('./content/first.txt', 'utf8', (err)=> { 
//     console.log('hello');
// });



// Example 1:
// const { readFile } = require('fs');            // Must use a .promises for the await readLines below because: 
//                                                         //  an await makes a function wait for a promise
// // const getText = function(path) {
// // const getText = (path) => {
// const getText = async (path) => {
//     console.log('1..');
//     return new Promise((resolve, reject)=> {
//         console.log('2.. ');
//         readFile(path, 'utf8',(err, data)=> {
//             console.log('3..');
//             if (err) {
//                 reject('Rejected error: ' + err);
//             } else {
//                 resolve('Resolved data: ' + data);
//             }
//             console.log('4..');
//         });
//     });
// };

// console.log(getText);

// getText('../content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(' Catch: ' + err));





console.log('\n\n***** NEXT CODE EXAMPLE ***** \n\n');




// Now Lets write this information using async/await function:

// const { readFile, writeFile }  = require('fs').promises;            // Must use a .promises for the await readLine & writeLine below because: 
                                                                    //  an await makes a function wait for a promise
// Or:

const { readFile, writeFile }  = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async(path1, path2) => {
    try {
        console.log('1... starting the try block');
        // const first = await readFile(path1, 'utf8');
        const first = await readFilePromise(path1, 'utf8');
        
        console.log('2...');
        // const second = await readFile(path2, 'utf8');
         const second = await readFilePromise(path2, 'utf8');

        // const first = await getText(path1);
        // // console.log('First parameter is : ' + first);
        // const second = await getText(path2);
        // console.log('Second parameter is : ' + second);

        console.log('3...');

        // await fs.writeFile('./content/result-mind-blown.txt', `This is AWESOME : ${ first } : ${ second }`, {flag: 'w'}, (err)=> {
        //      if (err) {
        //          console.log(err);
        //      }
        //  });

        await writeFilePromise(
        // await writeFile(
        '../content/result-mind-blown.txt',
            `This is AWESOME : ${first} : ${second}`,
            { flag: 'w' }
        );

        // await fs.writeFile(
        //      './content/result-mind-blown.txt',
        //      `This is AWESOME : ${first} : ${second}`,
        //      { flag: 'w' }
        // );
        console.log('4... ending the try block');
    } catch (error) {
        console.log('[*** ' + error + ' ***]');             // This error is actually everything in the reject(err) above
    }
};

console.log('before start()');
start('../content/first.txt', '../content/second.txt');
console.log('after start()');






