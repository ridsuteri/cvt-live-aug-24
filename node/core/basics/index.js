// Include fs module
const fs = require('fs');

const data = fs.readFileSync('./test.txt', { encoding: 'utf8'});

// Display the file data
console.log(data);

let dataTobeWritten = "This is a file containing a collection of books.";

fs.writeFile("books.txt", dataTobeWritten, (err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written file has the following contents:");
        console.log(fs.readFileSync("books.txt", "utf8"));
    }
});