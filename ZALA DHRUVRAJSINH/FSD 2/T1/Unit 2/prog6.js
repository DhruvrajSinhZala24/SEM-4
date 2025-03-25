//write a node js script that asyncronously write a data to file if no error occur during writting proccess then script should then append additional data to the same file, finally it should readthe content of file including newly return and appended data and display it in console
var fs=require("fs");
fs.writeFile("Unit_2/test1.txt","Hello World",(err)=>
    {if(err)
        console.log(err);
    else
        fs.appendFile("Unit_2/test1.txt"," Hello World Again",(err)=>{
            if(err)
                console.log(err)
            else
                fs.readFile("Unit_2/test1.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                    }
                })
        });
})