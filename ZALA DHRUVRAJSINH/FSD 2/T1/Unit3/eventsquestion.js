// wapto handle event as asked bellow:-
// 1. check if radius is negative or not if negative then display message radius must be positive else
// calculate the perimeter of circle
// 2. check side if -ve or not if -ve then display it must be +ve else calculate the peri. of square
const eventEmmiter=require('events');
const ee=new eventEmmiter();
ee.on('start',(circle, square)=>{
    if(circle<0){
        console.log("Radius Cannot Be Negative")
    }
    else{
        console.log(`Perimeter Of Circle:- ${2*Math.PI*Math.pow(circle,2)}`);
    }
    if(square<0){
        console.log("Side Of Square Cannot Be Negative");
    }
    else{
        console.log(`Perimeter Of square:- ${4*square}`);
    }
    });
ee.emit('start',4,100);