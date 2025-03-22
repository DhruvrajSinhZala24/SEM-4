// copy one file data to other
var ps=require("fs");
data=ps.readFileSync("node/readwrite.txt");
ps.writeFileSync("node/file2.txt",data)