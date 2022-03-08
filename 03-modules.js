
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');        // or you could use: const {peter,john} = require('./04-utils');
const utils = require('./05-utils');
const data = require('./06-alternative-flavor');
const { addValues } = require('./07-mind-grenade');
//const mind = require('./07-mind-grenade');
require('./07-mind-grenade');

utils.sayBye(data.singlePerson.name);
utils.sayHi('christos');
utils.sayHi(names.john);
utils.sayHi(names.peter);
utils.sayHi('Bob ...');
utils.sayBye('Bob');

//console.log(mind);
//mind.addValues();
addValues();
