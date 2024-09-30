//  object literal
var person1 = {
    name: "riddhi suteri",
    age: 90,
    gender: 'm',
    printInfo: function(){
        console.log('we are inside printInfo')
        console.log(this)
    },
    teach: function (){
        console.log(`${this.name} is ${this.age} years old`);
    },
}

// person1.printInfo();

// constructor
function Person(name, age, gender, yoe){
    // this - {}
    this.name = name, // {name: name}
    this.age = age, // {name: name, age: age}
    this.gender = gender, // {name: name, age: age, gender: gender}
    // ... and so on 
    this.teach = function (yoe){
        console.log(`Riddhi teaches well (being modest here, LOL). teaching since ${yoe} yr `)
    }
}

// factory function
function createPerson(name, age, gender, yoe){
    return {
    //   name: name,
    //   age: age,
    //   gender: gender,
    // this works only when both the variable shares the same name
      name,
      age,
      gender,
      teach: function (yoe) {
        console.log(
          `Riddhi teaches well (being modest here, LOL). teaching since ${yoe} yr `
        );
      },
    };
}

// let person2 = new Person('testuser', 20, 'm', 3);
// let person3 = createPerson('testuser2', 30, 'f', 13);
// let person4 = createPerson('testuser2', 30, 'f', 13);

// console.log(person1)
// console.log(person2)
// console.log(person3)

// to achieve : 
// var personN1 = new Person('person name', 12, 'm');   -- using constructor
// var personN2 = createPerson('person name', 12, 'm');   -- using factory function