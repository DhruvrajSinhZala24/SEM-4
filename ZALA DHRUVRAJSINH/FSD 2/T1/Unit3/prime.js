var d=require("./prime_module.js");
for(let i=1;i<51;i++){
    if(i==1){
        console.log(i);
    }
    else{
        var x=d(i);
        if(x){
            console.log(i)
        }
        else{
            continue;
        }
    }
}