

// 1. structure of an object
var person = {
    // properties
    name: "riddhi suteri",
    age: 90,
    gender: 'm',

    // methods
    teach: function (){
        console.log('Riddhi teaches well (being modest here, LOL) ')
    },

}

// 2. accessing the properties and methods
// i. dot notation
// console.log(person.name);

// 2. [] notation
let queryField = 'name'

console.log(person.queryField); // ❌ this is useless here, bcz there exists no key on obj like queryField
console.log(person[queryField]); //✅ this works perfectly fine, since value of queryField will be resolved and then accordingly the key of obj will be accessed
console.log(person['queryField']); // ❌ will not work, obviously same old reason
// person.teach();


// 3. add/alter more properties and methods to obj
person.height = "average";
person.age = 91;

delete person.age;

console.log(person);