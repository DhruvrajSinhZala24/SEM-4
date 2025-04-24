// Write express js script to perform following tasks :
// 1. Create one html file which contains 2 number-type input field , one dropdown which contains options like addition , subtraction , multiplication and division and 1 submit button.
// 2. The input field must contain value greater than zero else it will give a message - "Please enter a valid number". Also user must select any of the formula from dropdown list else give a message - "You have not selected any formula. The message will display on "/calc" page . 
// 3. If one formula is selected and the number are entered then respective calculation will be performed on page "calc". Use post method
var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.post('/calc',url,(req,res)=>{
    var x=parseInt(req.body.n1)
    var y=parseInt(req.body.n2)
    var operation=req.body.formula
    if(x>0 && y>0){
        var c;
        if(operation=='Add'){
            c=x+y
            res.write("sum=" +c )
        }
        else if(operation=='Sub'){
            c=x-y
            res.write("sum=" +c )
        }
        else if(operation=='Mul'){
            c=x*y
            res.write("sum=" +c )
        }
        else if(operation=='Div'){
            c=x/y
            res.write("sum=" +c )
        }
    }
    else{
        res.write("Negative number not allowed")
    }
    res.send()
}).listen(3000)