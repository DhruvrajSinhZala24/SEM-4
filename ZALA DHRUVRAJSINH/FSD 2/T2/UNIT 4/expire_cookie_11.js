const expr = require("express");
const app = expr();
const cp = require("cookie-parser");
app.use(cp());
app.get("/", (req, res, next) => {
    res.cookie("uname", "xyz", {
        expires: new Date(Date.now() + 50000)
    });
    res.cookie("lname", "xyz1", {
        expires: new Date(Date.now() + 50000)
    });
    res.cookie("abc", "pqr");
    next();
});
app.get("/", (req, res, next) => {
    console.log(req.cookies.uname);
    next();
    //res.send()
});
app.get("/", (req, res) => {
   // res.clearCookie("uname");
    res.send("Cookie deleted");
});
app.listen(8001, () => {
    console.log("server running at 8001");
});