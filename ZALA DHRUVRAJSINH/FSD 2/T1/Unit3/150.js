// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 
// subjects about of 25 marks and displays the total marks on console as an output.The calculate 
// event fires another event name percentage which takes total marks as argument and percentage 
// should get displayed in console.

const eventEmitter = require("events");
const { totalmem } = require("os");
const ee = new eventEmitter();
ee.on('percentage', (total) => {
    console.log(`Percentage : ${(total / 125) * 100} % `)
})
ee.on('start', (m1, m2, m3, m4, m5) => {
    total = m1 + m2 + m3 + m4 + m5
    console.log(`Total marks are : ${total}`)
    ee.emit('percentage', (total))
})
ee.emit('start', 25, 25, 25, 25, 25)