// write express script to print how much time user visit the page. For ex., if user visit first time
// ,”you have visited page First time” message will print. if user visit second time ,”you have visited
// page second time” message will print. and so on.
const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(sess(
    {
        resave: true,
        saveUninitialized: true,
        secret: "Helo1",
        cookie:{maxAge:10000} //after every 10 second the page view will start from 1 and if keep refreshing it then the count will keep increasing and pause for 10 second then it will be removed
    }
));
app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`<h1 style="color:blue;border:5px solid black;font-style:italic">
You have visited page ${req.session.page_views} times <h1>`);
    }
    else {
        req.session.page_views = 1,

            res.send(`<h1 style="color:green;border:5px solid black;font-
style:italic"> Welcome.. You have visited page ${req.session.page_views}

times<h1>`);
    }
});
app.listen(8001, () => {
    console.log("server running at 8001");
});