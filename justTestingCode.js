
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
