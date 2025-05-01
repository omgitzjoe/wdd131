const one=1;
const two='2';

let result = one * two;
console.log(result);

result= one +Number(two);
console.log(result);

//scope
let global = "I'm a global!";

function exampleFunction() {
    let block='I am a block level or local'
    console.log(block);
    console.log(global);
}
console.log(block);
console.log(global);
exampleFunction();

globle="I am also global";

console.log(global);