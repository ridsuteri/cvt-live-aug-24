let grandparent = {
    selfMadeAssest: 'real estates'
};

function Car(model, price){
    this.model = model;
    this.price = price;
}

// company itself is providing cng in all it's make
// Car.prototype.varient = 'cng'

var car1 = new Car('model1', 20);
// car1.__proto__.varient = 'cng';

var car2 = new Car('model2', 30);
var car3 = new Car('model3', 40);
console.log(car1.varient)
console.log(car2.varient)
console.log(car3.varient)

console.log(grandparent);

let parent = {
    businessGame: 'strong'
}

// fitting your own cng via custom workshops
parent.__proto__ = grandparent;

console.log(parent)

let child = {
    knowledge: 'cutting edge'
}
child.__proto__ = parent;
// console.log(child)