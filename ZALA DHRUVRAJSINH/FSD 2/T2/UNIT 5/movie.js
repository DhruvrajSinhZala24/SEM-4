const expr = require("express");
const router = expr.Router();
const movi = [
    {
        id: 102,
        name: "abc1",
        year: 1999,
        rating: 8.1
    },
    {
        id: 202,
        name: "xyz1",
        year: 2000,
        rating: 9.1
    }];
module.exports = router;
router.get('/',(req,res)=>{res.json(movi)})
router.get("/:id1", (req, res) => {
    var currMovi = movi.filter((m) => {
        console.log(m)
        if (m.id == req.params.id1) {
            return true;
        }
    });
    console.log(currMovi)
    if (currMovi.length == 1) {
        res.json(currMovi[0]);
    }
    else {
        res.json("Not Found");
    }
});