var nm = require('nodemailer')
const expr = require('express')
const app = expr()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mail.html')
})
app.get('/re', (req, res) => {

    var trans = nm.createTransport(
        {
            host: 'smtp.gmail.com',
            port: 465,
            auth: { user: 'satyampatel7227@gmail.com', pass: 'qbiagqvzlwjsnehu' }
        })
    var mailoption = {
        from: 'satyampatel7227@gmail.com',
        to: req.query.email,
        cc: 'privatepatel123@gmail.com',
        bcc: ['vedantpatel2492005@gmail.com'],
        subject: 'Ram Bhai',
        text: 'Rupala Saheb e Vinanti Kari Ram Bhai ...... Badha reporter Pochya',
        html:"<h1 style='color:red'>This is Just an Example</h1><i>Italic Text</i>",
        attachments:[{filename:'image.jpg',path:''}]
    }

    trans.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Mail Sent')
        }
    })
    res.send()

})
app.listen(5004)
