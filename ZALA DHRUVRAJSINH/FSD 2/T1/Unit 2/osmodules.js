// OS MODULE

// To get information of your computers OS

// arch() Specifications
// hostname() Name(ID) of System

// Platform() OS 64 or 32
// tmpdir() Path of temporary folder in c drive
// freemem()  Free memory in system RAM only in bytes
var os = require('os')
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.freemem())