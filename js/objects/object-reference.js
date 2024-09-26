const x = 10;
// x = 20;  not legal bcz of const
const testObj = {
    field1: "value"
}

testObj.field2 = 'new field'; // totally legal, despite obj being a const
console.log(testObj)


// primitive type
let a = 10;
let b = a;
a = 20;
// console.log('a : ', a, 'b : ', b)

// template literal / string interpolation
console.log(`a :  ${a} b :  ${b}`)

// reference type
let objA = {value: 10};
let objB = objA;

objA.value = 20;
console.log(`ObjA.value :  ${objA.value} ObjB.value :  ${objB.value}`)