// Sychronously = blocking, Asynchronously = non-blocking

const { readFileSync, writeFileSync } = require('fs');
// is equivalent to:
//  const fs = require('fs');
//  const read = fs.readFileSync();
//  const write = fs.writeFileSync();

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}\n`,
    {flag: 'a'}                 //  Open file for appending. The file is created if it does not exist.
);

console.log('done with this task');
console.log('starting the next task');

