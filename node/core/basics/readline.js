const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});