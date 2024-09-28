let person = {
  name: "Aman",
  age: 30,
  address: {
    street: "123 MG Road",
    city: "New Delhi",
    location: {
      lat: 80,
      long: 56,
    },
  },
};

let shallowCopy = { ...person };
let deepCopy = JSON.parse(JSON.stringify(person));

// Modify the nested field in the shallow copy
shallowCopy.address.city = "Delhi";

// Modify the nested field in deep copy
deepCopy.address.location.lat = 37;

console.log("using Shallow copy [original obj would be impacted]")
console.log(person.address.city);  
console.log(shallowCopy.address.city);  

console.log("using Deep copy [original obj won't be impacted]")
console.log(person.address.location.lat); 
console.log(deepCopy.address.location.lat);