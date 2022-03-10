
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
        resolve("RESOLVED");
    });
    console.log(await _Promise);
}
myDisplay();




console.log('-------- Finished Running the Testing script -----------\n');
