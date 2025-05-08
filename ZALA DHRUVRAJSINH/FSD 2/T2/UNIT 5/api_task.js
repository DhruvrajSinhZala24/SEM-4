// create an api player with fields (id , name , team , role , runs , wickets )
const expr = require("express");
const router = expr.Router();
const cricket = [
    {
        id: 100,
        name: "abc1",
        team:'RCB',
        role:"batsman",
        runs: 100,
        wickets: 0
    },
    {
        id: 101,
        name: "abc2",
        team:'RCB',
        role:"bowler",
        runs: 0,
        wickets: 5
    }];
module.exports = router;
router.get('/',(req,res)=>{res.json(cricket)})
router.get("/id/:id1", (req, res) => {
    // var current = cricket.filter((m) => {
    //     console.log(m)
    //     if (m.id == req.params.id1) {
    //         return true;
    //     }
    // });
    var x=null;
    for(let i=0;i<cricket.length;i++){
        temp=cricket[i]
        if(temp.id==req.params.id1){
            x=cricket[i]
        }
    }
    console.log(x)
    if (x!=null) {
        res.json(x);
    }
    else {
        res.json("Not Found");
    }
});
router.get("/role/:role1", (req, res) => {
    // var current = cricket.filter((m) => {
    //     console.log(m)
    //     if (m.id == req.params.id1) {
    //         return true;
    //     }
    // });
    var x=null;
    for(let i=0;i<cricket.length;i++){
        temp=cricket[i]
        if(temp.role==req.params.role1){
            x=cricket[i]
        }
    }
    console.log(x)
    if (x!=null) {
        res.json(x);
    }
    else {
        res.json("Not Found");
    }
});