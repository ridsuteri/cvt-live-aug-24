const enc = require('encrypt-decrypt');

let encoded = enc.encrypt("hello, captain, i have got something mysterious");

console.log(encoded)
let decoded = enc.decrypt(encoded);
console.log(decoded)