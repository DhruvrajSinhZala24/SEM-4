const checkprime=(a)=>{
    count=0
    for(let i=2;i<=parseInt(Math.sqrt(a));i++){
        if(a%i==0){
            count+=1
        }
    }
    if(count>0){
        return false
    }
    else{
        return true
    }
}
module.exports=checkprime;