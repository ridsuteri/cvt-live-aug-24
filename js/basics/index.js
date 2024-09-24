// 1. define an array
var array = [90,78,45,99];
var array2 = ['Name1', "name2", 'Name3'];
var array3 = [78,'name2'];


// 2. printing the whole array
// console.log(array)
// console.log(array2)
// console.log(array3)


// 3. how to access the values of array
// console.log(array[2])
// array[2] = 'changed'
// console.log(array[2])

// 4. add/manipulate array

// adds from end
// array.push(89);
// add from starting index
// array.unshift(0);

// 5. remove values from array

// remove from end
// array.pop();
// array.pop();

// remove from begnining
// array.shift();
// array.shift();

// splice(index from where to start, count of numbers to delete, .... items in case you want to add)

// deleting 1 number after 1st index
// array.splice(1, 1)
// array.splice(2, 0, 0)


// 6. iterate on array
for(let i = 0; i < array.length; i++){
    // console.log(array[i]);
}

// for of loop for iteration on array
for(let a of array){
    // console.log(a);
}

// 7. join arrays

// let combinedArray = [array, array2];
// ... spread operator, which basically lays out the content of any array or object as well
let combinedArray = [...array, ...array2];
console.log(combinedArray)
