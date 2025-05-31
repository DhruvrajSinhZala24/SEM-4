// apply filter to skip digits which are less than 10 from the array and display all the remaining digits in array ,
// [3,5,11,4,17,8,21,2,26,13,81]
const ArrayFilter=()=>{
    const arr=[3,5,11,4,17,8,21,2,26,13,81]
    const newarr=arr.filter((num)=>{
        if(num<10)
            return false;
        else
            return true;
    })
    return(<h1>Array after filter {newarr}</h1>) //output:- Array after filter 111721261381
}
export default ArrayFilter;