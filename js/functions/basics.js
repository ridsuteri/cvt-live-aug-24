
// 1. function declaration
function sampleFunction (parameter1, parameter2){
    console.log(parameter1, parameter2)
}

sampleFunction('This is a function declaration call',1)

// 2. function expression with anonoymous function 
let func = function (parameter1, parameter2){
    console.log(parameter1, parameter2)
}

func('This is a function expression call',2);

// 3. function expression with arrow function 
let arrowFn = (parameter1, parameter2) => {
    console.log(parameter1, parameter2)
};
arrowFn('This is an arrow function call',3);

// 4. iife - immediately invoked function expression
(function bumperFunction (parameter1, parameter2){
    console.log(parameter1, parameter2)
})('This is an iffe call',4);
