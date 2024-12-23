const os = require('os');
const process = require('process')
console.log(`Total memory: ${os.totalmem()}`)
console.log(`Free memory: ${os.freemem()}`)
console.log(`Machine info: ${os.machine()}`)
console.log(process.env);