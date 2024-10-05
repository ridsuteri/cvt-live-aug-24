// 1.
// Create an object animal with a property species. 
// Then, create an object dog that inherits from animal.
//  Add a property breed to dog. Log both species and breed from the dog object.

const animal = { species: "mammal" };
const dog = Object.create(animal);
dog.breed = "Labrador";

console.log(dog.species); 
console.log(dog.breed);  

// 2. Given a constructor function Car, add a method honk to its prototype that logs "Beep!". 
// Then, create two instances of Car and make both of them call the honk method.

// Step 1: Define the constructor function Car
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Step 2: Add the honk method to Car's prototype
  Car.prototype.honk = function() {
    console.log("Beep!");
  };
  
  // Step 3: Create two instances of the Car
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic");
  
  car1.honk(); 
  car2.honk(); 



// 3. Using ES6 classes, create a base class Shape with a method draw().
//  Then, create a subclass Circle that overrides the draw() method.
//  Ensure that Circle instances can call both the Circle version of draw() and the Shape version using super.

// Step 1: Create the base class Shape with a draw() method
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Base class draw method
    draw() {
      console.log("Drawing a shape");
    }
  }
  
  // Step 2: Create the Circle subclass that extends Shape
  class Circle extends Shape {
    constructor(color, radius) {
      // Call the parent class (Shape) constructor using super
      super(color);
      this.radius = radius;
    }
  
    // Overriding the draw method in Circle
    draw() {
      // Call the parent class's draw method using super
      super.draw(); // Calls the Shape's draw method
      console.log("Drawing a circle with radius " + this.radius);
    }
  }
  
  // Step 3: Create an instance of Circle and call the draw method
  const myCircle = new Circle("blue", 10);
  
  myCircle.draw();
  