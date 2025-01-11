/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');

const readableStream = fs.createReadStream('input.txt', {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        let chunk;
        while ((chunk = readableStream.read()) !== null) {
            writableStream.write(`${chunk}\n`);
        } // check the null chunk, cuz in write stream, null chunk is the end of the stream.
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.error('Error reading chunk:', error);
    }
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('Done');
});
