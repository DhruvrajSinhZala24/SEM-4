// write numbers in file and then sort those nmbers in ascending order and print it on console
var ps=require("fs");
ps.writeFileSync("node/numbers.txt","1,20,18,5,6,12,2,12,13,18,100,0")
data=ps.readFileSync("node/numbers.txt","utf-8")
arr=data.split(",")
for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i])
}
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         }
//     }
// }
console.log(arr.sort((a,b)=>a-b)) // shortcut and if we do b-a then descending