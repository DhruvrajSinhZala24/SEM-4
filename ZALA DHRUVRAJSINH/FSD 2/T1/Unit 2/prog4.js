//  create a jon object contains array of objects. Calculate perimeter of square and circle by using side value and diameter value respectively. And write in shape.txt file
const shape=[{name:"circle",diameter:"8"},{name:"square",side:10}];
var ps=require("fs");
var peri=(shape[0].diameter/2)*3.14*2;
var peri1=(shape[1].side)*4
ps.writeFileSync("Unit 2/shape.txt",`circle=${peri} and square=${peri1}`);