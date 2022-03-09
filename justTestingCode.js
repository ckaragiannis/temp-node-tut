
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const items2 = {
    example1: 'example11',
    example2: 'example21',
    example3 : { 
        example3: 'example31',
        example4: 'example41'
    },
    example5: 'example51'
};

console.log(_.flattenDeep(items), `and the length of the array is: ${_.flattenDeep(items).length}`);
console.log(_.flatMapDeep(items2)[2].example4);

console.log('Finished Running the justTestingCode script');


console.log('first task');

setTimeout(() => {
    console.log('second task')
}, 0);

console.log('next task');



//another example:

const { readFile } = require('fs');

console.log('starting another first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
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


