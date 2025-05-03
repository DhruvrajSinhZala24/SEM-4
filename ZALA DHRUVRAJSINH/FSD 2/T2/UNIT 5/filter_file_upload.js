const expr = require("express");
const app = expr();
const path = require("path");
const multer = require("multer");
const maxSize=1*1024*1024
var storage = multer.diskStorage(
    {
        destination: "upload",
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
const filter = (req, file, cb) => {
    if (file.mimetype == "application/pdf") {
        cb(null, true);
    }
    else {
        return cb('Only pdf format allowed!');
    }
}
var upload1 = multer(
    {
        storage: storage,
        limits:{fileSize:maxSize},
        fileFilter:filter
    }).array("mypic");
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/file_upload_7.html");
});
app.post("/uploadfile", upload1, (req, res) => {
    //Const f=req.file;
    //res.send(f);
    res.send('file uploaded');
});
app.listen(3000, () => {
    console.log("http://localhost:3000");

});