var nm=require('nodemailer')
var trans=nm.createTransport({host:'smtp.gmail.com',port:465,auth:{user:'sender@gmail.com',pass:'App Password'}}) //you will get it from google account gmail settings from app password
var mailoption={from:'sender@gmail.com',to:'receiver@gmail.com',
    subject:'Testing Mail',text:'Hello, how are you?'
}
trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Mail Sent')
    }
})