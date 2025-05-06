const expr = require("express");
const app = expr();
const api = require("./restful_api");

// Add this root route
app.get("/", (req, res) => {
    res.send("Welcome to the Student API. Use /api to access the data.");
});

// Mount your API
app.use("/api", api);

// Start the server
app.listen(7899, () => {
    console.log("Server running at http://localhost:7899");
});
