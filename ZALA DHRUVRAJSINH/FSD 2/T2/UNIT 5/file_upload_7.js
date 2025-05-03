const expr = require("express");
const app = expr();
const path = require("path");
const multer = require("multer");
var storage = multer.diskStorage(
    {
        destination: "upload",
        filename: function (req, file, cb) {
            cb(null, file.originalname + "-" + Date.now() + ".jpg");
        }
    });
var upload1 = multer(
    {
        storage: storage,
    }).single("mypic"); // if we do array('mypic') then can upload multiple file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/file_upload_7.html");
});
app.post("/uploadfile", upload1, (req, res) => {
    //Const f=req.file;
    //res.send(f);
    res.send('file uploaded');
});
app.listen(3000,()=>{
    console.log("http://localhost:3000");

});