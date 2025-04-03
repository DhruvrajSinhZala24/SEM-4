const eventEmmiter=require('events');
const ee=new eventEmmiter();
ee.on('start',(start, end)=>{
    console.log(`started from ${start} to ${end}`);
    });
ee.emit('start',1,100);