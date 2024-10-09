// 1. print this directly in node
// console.log(this); // empty obj
// this is ambigous (it should have pointed to global)

// 2. print this directly in browser
//  window obj

// 3. print this inside function called directly from global (node)
function printThis() {
  console.log(this);
}

// printThis() // global obj

// 4. inside the object (but with normal functions)
let person = {
  name: "Aman",
  printInfo: function () {
    console.log(this);
  },
};

person.printInfo();

// 4. inside the object (but with normal functions)
// part A
let person2 = {
  name: "Aman",
  printInfo: () => {
    // since this is not binded for arrow function
    // and this keyword in the current surrounding is {}
    // that's why it will give {}
    console.log(this);
  },
};

person2.printInfo(); // {}

let person3 = {
  name: "Aman",
  printInfo: function () {
    // this - current obj
    let arrow = () => {
      console.log(this);
    };
    arrow();
  },
};

person2.printInfo(); // person3 object here

// THIS KEYWORD IN ARROW FUNCTIONS DOESN'T CARE ABOUT WHO IS CALLING IT
// OR HOW IT IS BEING CALLED
// ALL IT CARES ABOUT IT WHERE IS BEING DEFINED
// MEANING THAT IT BORROWS THIS KEYWORD FROM IT'S SURROUNDING


// 5. this keyword inside a constructor

function Person (name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const p1 = new Person('abc',30,'m')
const p2 = new Person('xyz',40,'f')