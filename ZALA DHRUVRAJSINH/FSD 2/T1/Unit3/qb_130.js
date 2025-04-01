var { rev, avg } = require("./qb_130_module.js");
arr = rev(12);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
fno = arr[2];
arr2 = rev(arr[1]);
sno = arr2[0];
if (fno == sno) {
    console.log("Equal");
}
else {
    console.log("not equal");
}
console.log(avg(5, 15));