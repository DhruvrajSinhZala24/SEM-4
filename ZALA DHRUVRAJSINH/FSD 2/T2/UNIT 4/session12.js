const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(sess(
    {
        resave: true,
        saveUninitialized: true,
        secret: "Hello",
        cookie:{maxAge:20000}
    }
));
// resave=true So everytime ne session banse
//saveUninitialized:true Empty session ne pan save karse

//secret:'Hello'(Exam ma khali a lakhso to chalse(compulsory))

//cookie:{maxAge:20000} Session ne Time dyration ape che band thavanu(20 seconds)
app.get("/", (req, res) => {
    if (!req.session.fname) {
        req.session.fname = "hiral"
        res.redirect("/fetchsession")
    }
    else {
        console.log("Session is already set...");
    }
})
app.get("/fetchsession", (req, res) => {
    res.write(`<h1> Welcome... ${req.session.fname} <h1>`);
    res.write(`<button><a href="deletesession">Delete session</a></button>`);
    res.send();
})
app.get("/deletesession", (req, res) => {
    req.session.destroy();
    res.send("Session destroy")
})
app.listen(8004, () => {
    console.log("server running at 8004");
});