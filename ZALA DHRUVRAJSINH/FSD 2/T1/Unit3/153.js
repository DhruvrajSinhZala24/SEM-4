// Write a node.js script using Event handling to perform following tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended Successfully”.
// c) Read the content of the file abc.txt and print the content on http web server.
// d) Do all the operations of File using asynchronous file system module. And Lastly print the 
// message “All operations performed successfully” on console.
const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');
const ee = new EventEmitter();
ee.on('start', () => {
    fs.writeFile('abc.txt', 'Hello, this is the initial data!', (err) => {
        if (err) throw err;
        console.log('File created and data written successfully.');
        fs.appendFile('abc.txt', '\nThis is the appended data.', (err) => {
            console.log('Data Appended Successfully.');
            fs.readFile('abc.txt', 'utf8', (err, data) => {
                if (err) throw err;
                const server = http.createServer((req, res) => {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                });
                server.listen(5000, () => {
                    console.log('Server is running');
                    console.log('All operations performed successfully');
                });
            });
        });
    });
});
ee.emit('start');