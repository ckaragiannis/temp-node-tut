// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// Try all these globals out
// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

console.log('Current Dir name is: ' + __dirname);
// setInterval(() => {
//     console.log('Set Interval Testing');
// }, 1000);

setTimeout(()=> {
    console.log("Timeout Testing");
}, 1000);