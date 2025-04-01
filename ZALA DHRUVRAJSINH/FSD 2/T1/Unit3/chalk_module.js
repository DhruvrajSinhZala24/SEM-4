//in terminal run npm install chalk
import ch from "chalk" ;
console.log(ch.green("welcome to LJ "))
console.log(ch.red.underline(" LJ University "))
console.log(ch.blue.underline.bold(" FSD 2 "))
const welcome=ch.yellow;
console.log(welcome("welcome to LJ "))
console.log(ch.blue("hello")+'world'+ch.red("!"));
console.log(ch.blue("hello")+ch.underline.bgRed("World"));