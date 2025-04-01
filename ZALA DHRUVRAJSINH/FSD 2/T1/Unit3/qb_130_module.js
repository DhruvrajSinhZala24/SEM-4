// Write a node.js script to create my own module to calculate reverse of a given
// number. That module should be use to compute all numbers between 1 to 100
// in which square of reverse & reverse of sqaure is same. This has call of reverse
// twice so call it from module. Also keep a function to compute average of any
// number of elements


const rev = (n) => {
    var r = 0;
    r2 = n * n;
    while (n > 0) {
        r = (r * 10) + (n % 10);
        n = parseInt(n / 10);
    }
    r3 = r * r;
    return [r, r2, r3];
}
const avg = (x, y) => {
    var average = (x + y) / 2;
    return average;
}
module.exports = { rev, avg };