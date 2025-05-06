const expr = require("express");
const router = expr.Router();

const data = [
    { id: 101, name: "ABC", branch: "CSE", contact: 9876543210, city: "Ahmedabad" },
    { id: 102, name: "BCD", branch: "CE", contact: 9876543210, city: "Ahmedabad" },
    { id: 103, name: "XYZ", branch: "CSE", contact: 9876543210, city: "Rajkot" },
    { id: 104, name: "PQR", branch: "IT", contact: 9876543210, city: "Ahmedabad" },
    { id: 105, name: "ABC", branch: "CSE", contact: 9876543210, city: "Surat" },
    { id: 106, name: "ABC", branch: "IT", contact: 9876543210, city: "Rajkot" }
];

// Route to get all data
router.get("/", (req, res) => {
    res.set("content-type", "text/html");
    for (let i of data) {
        res.write(`<h3>ID: ${i.id}, Name: ${i.name}, Branch: ${i.branch}, Contact: ${i.contact}, City: ${i.city}</h3>`);
    }
    res.send();
});

// Route to get data by ID
router.get("/id/:id", (req, res) => {
    const current_data = data.filter(i => i.id == req.params.id);
    if (current_data.length === 1) {
        res.send(current_data);
    } else {
        res.send("Not Found");
    }
});

// Route to get data by branch
router.get("/branch/:branch", (req, res) => {
    const current_data = data.filter(b => b.branch.toLowerCase() === req.params.branch.toLowerCase());
    if (current_data.length >= 1) {
        res.send(current_data);
    } else {
        res.send("Not Found");
    }
});

module.exports = router;
