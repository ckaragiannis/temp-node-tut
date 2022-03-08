const num1 = 5;
const num2 = 11;

function addValues() {
    console.log(`The sum is: ${num1+num2}`);
}

addValues();
console.log("Why does this file altogether run when you simply just require it????");
console.log("Always remember, when you import a module like this, you always invoike all of it...")

module.exports ={num1,num2, addValues};

console.log(module.exports);