// to fetchthe queery string in the url and check if the year is leap year or not
var url=require('url');
var v1='http://localhost:8080/default.html?year=2025&month=feb';
x=url.parse(v1,true);
y=parseInt(x.query.year);
if((y%4==0) && (y%100!=0||y%400==0)){
    console.log("leap Year")
}
else{
    console.log("Not")
}
