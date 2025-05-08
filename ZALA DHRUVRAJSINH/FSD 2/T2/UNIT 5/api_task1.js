const expr = require("express");
const app = expr();
const cricket = require("./api_task"); // require movies.js file
app.use("/", cricket);
app.listen(3000, () => {
    console.log("Running at 3000");
});