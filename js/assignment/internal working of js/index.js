// 1.
"use strict";

function show() {
  console.log(this);
}
show(); // undefined

// 2. ---------------------------
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const person1 = new Person("Emily");
person1.greet(); // Hello, Emily

// 3. ---------------------------
const person = {
  name: "Alex",
  greet: function () {
    function innerGreet() {
      console.log(this.name);
    }
    innerGreet();
  },
};
person.greet(); // undefined

// 4. ---------------------------
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const func1 = outer();
const func2 = outer();

func1(); //1
func1(); // 2
func2(); // 1

// 5. ---------------------------
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
console.log(double(10)); //20

// 6. ---------------------------
(function () {
  var secret = "hidden";
  console.log(secret); //   hidden
})();
console.log(secret); // ReferenceError: secret is not defined

// 7. ---------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 3
// 3
// 3

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j);
  }, 1000);
}
// 0
// 1
// 2

// 8. ---------------------------
function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

function testLet() {
  let y = 1;
  if (true) {
    let y = 2;
    console.log(y); // 2
  }
  console.log(y); // 1
}

testVar();
testLet();
