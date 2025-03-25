// defining an array of object with properties name and age,write this in a file student.txt. Then read the file and display the object on console
var arr=[{"Name":"Std1","Age":18},{"Name":"Std2","Age":19},{"Name":"Std3","Age":20}]
var ps=require("fs");
ps.writeFileSync("student.txt",JSON.stringify(arr))
var x=ps.readFileSync("student.txt","utf-8");
var y=JSON.parse(x);
console.log(y);