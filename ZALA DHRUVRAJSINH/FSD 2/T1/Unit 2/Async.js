// writeFile(filename,data,callback)
//appendFile(filename,data,callback)
//readFile(filename,callback)

var fs=require("fs");
fs.writeFile("test.txt","Hello World",(err)=>
    {if(err)
        console.log(err);
    else
        console.log("Written In The File");
})

fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("Last Statement");