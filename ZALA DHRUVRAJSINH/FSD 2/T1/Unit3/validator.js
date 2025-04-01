//npm install validator
import v from'validator';
console.log(v.isEmail("hello@gmail.com"));
console.log(v.isHexadecimal("ABC"));
console.log(v.isLowercase("gdvfsd"));
console.log(v.isEmpty(" "));