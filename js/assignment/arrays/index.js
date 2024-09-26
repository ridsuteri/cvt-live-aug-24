// 1. Find the Maximum Number in an Array
// Create a function findMax(arr) that loops through an array of numbers and returns the largest number.
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 2. Write a function countOccurrences(arr, num) that takes an array and a number as arguments. The function should return the number of times the given number occurs in the array using a loop.
function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

// 3. Filter Even Numbers from an Array
// Create a function filterEvens(arr) that takes an array of numbers and returns a new array containing only the even numbers, using a loop.
function filterEvens(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}
