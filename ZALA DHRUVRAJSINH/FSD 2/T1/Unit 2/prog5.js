// WA node js script to create a class name person by asgin name and age in form of memeber 
// create one function named elder which return elder person object (details of elder person should be printed in console as well as file ) 

class person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    elder(obj1){
        if(this.age>obj1.age){
            return this
        }
        else{
            return obj1
        }
    }
}
var obj1=new person("Parth",69)
var obj2=new person("Vedant",6969)
var obj3=obj1.elder(obj2)
console.log(obj3)
var ps=require("fs");

ps.writeFileSync("elder.txt",JSON.stringify(obj3))
var p1=ps.readFileSync("elder.txt","UTF-8")
var data=JSON.parse(p1)
console.log(data)