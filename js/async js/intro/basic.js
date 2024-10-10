let a = 2323;
let b = 3232;


// this is a simulation of a blocking piece of code 
// network calls
// db calls
// file operations
// or any other blocking code
let start = Date.now();
setTimeout(()=>{
    console.log('1. printed after a delay of 1 mili-second')
},10)


let c = a * b;
let d = a/b;

// console.log(c)
// console.log(d)
let end = Date.now()
setTimeout(()=>{
    console.log('2. printed after a delay of 0 mili-second')
},0)
console.log('time taken between two setTimeouts >>', end-start);

// ......
// 20 thousands lines of code