//methods:- basename(),dirname(),extname()
var pm=require('path');
v1=pm.dirname("D:/ZALA DHRUVRAJSINH/abc.html");
v2=pm.basename("D:/ZALA DHRUVRAJSINH/abc.html");
v3=pm.extname("D:/ZALA DHRUVRAJSINH/abc.txt");
v4=pm.parse("D:/ZALA DHRUVRAJSINH/abc.html");
console.log("Directory:- "+v1);
console.log("FileName:- "+v2);
console.log("Extension:- "+v3);
console.log(v4);