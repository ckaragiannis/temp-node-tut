
const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err,result)=> {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${ first }, ${second}\n`,
            { flag : 'a' },
            (err)=> {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done with this Task');
            });
    });
});

console.log('Starting Next Task');
