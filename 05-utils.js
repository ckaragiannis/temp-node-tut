
module.exports.sayHi = (name) => {
    console.log(`Hello ${name}`);
};

module.exports.sayBye = (name) => {
    console.log(`GoodBye ${name}`);
};

console.log(module.exports);
// Export default
//module.exports = sayHi;