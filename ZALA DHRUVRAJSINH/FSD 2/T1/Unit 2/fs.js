var ps=require("fs");
// ps.mkdirSync("node");
ps.writeFileSync("node/write.txt","Hello");
ps.appendFileSync("node/write.txt"," How Are You")
data=ps.readFileSync("node/write.txt")
console.log(data); 
console.log(data.toString());
ps.renameSync("node/write.txt","node/readwrite.txt")
// ps.unlinkSync("node/readwrite.txt") //it will delete the file