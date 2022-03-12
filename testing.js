
console.log('-------- Started Running the Testing script -----------\n');



// Promises Example:

function myDisplayer(some) {
    console.log('Displayer: ' + some);
  }
  
let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
    // some code (try to change x to 5)
    if (x == 0) {
        resolve('Resolved Successful');
    } else {
        reject("Rejected Unsuccessful");
    }
});

// Promise Results Method # 1 
// myPromise.then(
//     (result)=> {myDisplayer('I am here: ' + result)},
//     function(error) {myDisplayer(error);}
// );

// Or Promise Results Method # 2 
// myPromise
//     .then((result)=> console.log('Then function: ' + result))
//     .catch((err)=> console.log('Catch function: ' + err));

// Or Promise Results Method # 3 
myPromise.then(
    function(result) { myDisplayer('Success: ' + result); console.log("Im outta Here\n\n"); },
    function(err) { myDisplayer('Error: ' + err); console.log('F\'in errors\n\n'); }
);




// another example:

async function myDisplay() {
    let _Promise = new Promise((resolve, reject) => {
        resolve(`RESOLVED`);
    });
    console.log(await _Promise);
}
myDisplay();



console.log('-------- Finished Running the Testing script -----------\n');


console.log('***** NEXT EXAMPLE **** ');

// ANOTHER EXAMPLE:


// Node.js program to illustrate 
// util.promisify() methods
  
// Importing Utilities module
const util = require('util')
  
// importing File System module
const fs = require('fs');
const { resolve } = require('path');
  
// Use promisify to convert 
// callback based methods to 
// promise based methods
const readdir = util.promisify(fs.readdir)
const lstat = util.promisify(fs.lstat)
  
  
const readFiles = async (path) => {
    const files = await readdir(path)
    console.log('Files are: ' + files + ' \n\n');
    for (let file of files) {
        const stats = await lstat(file)
        if (stats.isFile()) {
            console.log(`${file} -----> File`)
        } else {
            console.log(`${file} -----> Folder`)
        }
    }
}
readFiles('./')
    .catch((err) => {
        console.log('Outrageous Error: ' + err)
});



console.log('***** NEXT EXAMPLE **** ');

// ANOTHER EXAMPLE:

