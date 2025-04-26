const expr = require("express");
const app = expr();
const bp = require("body-parser");
const url = bp.urlencoded(
    {
        extended: false
    });
console.log(url);
const staticPath = __dirname;
app.use(expr.static(staticPath));
app.post("/check", url, (req, res, next) => {
    if (req.body.uname == "admin") {
        next();
    }
    else {
        res.send("<h1 style='color:red'>wrong credentials</h1>")
    }
});
app.post("/check", url, (req, res, next) => {
    res.write(`<h1>welcome...${req.body.uname}</h1>`)
    res.send();
}
).listen(3001);