// js functions can take any function as their parameters 
function dummy(innerFunction){
    
    innerFunction();

    // they can return another function as well
    return function responseFunction (){
        console.log('hello I am a returned function ... ')
    }
}

// and this particular behaviour of js functions is called as hoc
// .map(), .filter(), .reduce(), .sort(), .forEach()
// these are a classic example of higher order functions in js

function inner(){
    console.log('i am a function which will be used as a parameter to another function');
}

function main(helper){
    helper();
    console.log('inside the main function')
}

// ❌, it will be executing the inner function directly, instead of passing it
// main(inner())
// main(inner)

// ********** EXAMPLES **********
let arr = [30,40,60];

// function forEach(helper){
    // while iterating, 
    // helper()
// }

// arr.forEach(inner);

// arr.forEach(function myOwnHelperFunction (){
//     console.log('We are inside the custom helper function ....')
// });

let forEachTransfomed = arr.forEach(function (element, index, array){
    // console.log(`Element: ${element} Index: ${index} Array:${array}`);
    element += 5;
    // console.log(element)
    return element;
})
// console.log(forEachTransfomed) //won't work, bcz forEach really can't return anything 😂 

let graced = arr.map(function (element, index, array){
    // console.log(`Element: ${element} Index: ${index} Array:${array}`);
    element += 5;
    // console.log(element)
    return element;
})
// console.log(graced);

let rankers = arr.filter(function (element, index, array){
   if (element > 50)
    return element;
})
console.log(rankers)

let sumOfMarks = arr.reduce(function (previousValue, currentElement, index, array){
  return previousValue += currentElement;  
}, 100)

console.log(sumOfMarks)