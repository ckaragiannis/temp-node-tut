const { readFile } = require('fs');

console.log('starting another first task');

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(result);
        console.log('Completed first task');
    }
});

console.log('Starting next task');

