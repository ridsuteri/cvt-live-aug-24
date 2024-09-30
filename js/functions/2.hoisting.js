// funcDeclaration();
// funcExpression();

// console.log(a);
var a = 10;

function funcDeclaration (){
    console.log('function declartion')
}
a = 20;
// console.log(a)

let funcExpression = function (){
    console.log('function expression')
}
// console.log(funcExpression);

// here it is spread operator
// let arr3 = [ ...arr1, ...arr2 ];
// let obj3 = { ..obj1, ..obj2 }

// here it is a rest operator
function add(...nums){
    // console.log(nums)
    let sum = 0;
    for(var num of nums){
        sum += num
    }
    return sum
    // return nums.reduce((acc, element)=>{
    //     return acc+=element;
    // },0)
}
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
// console.log(add(4,5));
// console.log(add(10,57));
// console.log(add(9,58));
