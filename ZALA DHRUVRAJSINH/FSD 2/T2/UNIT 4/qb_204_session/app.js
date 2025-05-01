// write a script to meet following requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesession page. store username in session.
// 3) After saving session, redirect to fetchsession page and read session value. put a logout link
// button here.
// 4) destroy the session on this page and redirect to index.html



const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(expr.static(__dirname, { index: "index.html" }))
app.use(sess(
    {
        resave: true,
        saveUninitialized: true,
        secret: "Heloo"
    }
));
app.get("/savesession", (req, res) => {
    if (!req.session.u) {
        req.session.u = req.query.uname
        res.redirect("/fetchsession")
    }
    else {
        console.log("Session is already set...");
    }
})
app.get("/fetchsession", (req, res) => {
    res.write(`<h1 style="color:blue;border:5px solid black;font-style:italic">
Welcome... ${req.session.u} <h1>`);
    res.write(`<button><a href="deletesession">Logout</a></button>`);
    res.send();
})
app.get("/deletesession", (req, res) => {
    req.session.destroy();
    res.redirect("/")
})
app.listen(8004, () => {
    console.log("server running at 8001");
});