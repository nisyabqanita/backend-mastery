// TODO: tampilkan teks pada notes.txt pada console.
// syncronous method
const fs = require('fs');
const myNotes = fs.readFileSync('notes.txt', 'utf-8');

console.log('Reading file syncronously...');
console.log(myNotes);

// asyncronous method
const readMyData = (error, data) => {
    if (error) {
        console.log('Error reading file');
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'utf-8', readMyData);
console.log('Reading file asyncronously...');