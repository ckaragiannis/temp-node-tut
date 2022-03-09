// const fs = require('fs');
// const readFile = fs.readFile('./content/first.txt', 'utf8', (err)=> { 
//     console.log('hello');
// });




const { readFile } = require('fs');

const getText = (path) => {
    console.log('1..');
    console.log(path);
    return new Promise((resolve, reject)=> {
        console.log('2..');
        readFile(path, 'utf8',(err, data)=> {
            console.log('3..');
            if (err) {
                reject(' Rejected error: ' + err);
            } else {
                resolve(' Resolved data: ' + data);
            }
            console.log('4..');
        });
    });
};

// getText('./content/first.txt')
//     .then((result)=> console.log(' Then: ' + result))
//     .catch((err)=> console.log(' Catch: ' + err));


const { writeFile } = require('fs').promises;

const start = async() => {
    try {
        // const first = await readFile('./content/first.txt', 'utf8');
        // const second = await readFile('./content/second.txt', 'utf8');
        const first = await getText('../content/first.txt');
        console.log(first);
        // const second = await getText('./content/second.txt');

        // await writeFile(
        //     './content/result-mind-blown.txt',
        //     `This is AWESOME : ${first} : ${second}`,
        //     { flag: 'w' }
        // );
    } catch (error) {
        console.log('[*** ' + error + ' ***]');             // This error is actually everything in the reject(err) above
    }
};

start();