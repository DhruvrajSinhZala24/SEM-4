// const eventEmmiter=require('events');
// const ee=new eventEmmiter();
// ee.on('start',()=>{
//     console.log("Event Start");
// })
// ee.emit('start');

//All Methods:- 

var e = require("events");
var ee = new e.EventEmitter();
var connectHandler1 = function () {
    console.log("connection 1 succesfully");
}
var connectHandler2 = function () {
    console.log("connection 2 succesfully");
}
ee.on("connection", connectHandler1);
ee.on("connection", connectHandler2);
ee.emit("connection");
console.log(ee.listenerCount("connection"));
ee.removeListener("connection", connectHandler1);
console.log(ee.listenerCount("connection"));
ee.emit("connection");