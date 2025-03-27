var url=require('url')
var v1='https://audio.google.com:5001/autoplay?docid=12904341&h1=en#12094312435'
x=url.parse(v1,true) 
console.log(x)