// Write a program to create function based ReactJS app having an array of 6
// people having mentioned age [70,83,38,65,49,94] and display list of people
// whose age is greater than 60 using filter method. Also display total count of
// people whose age is greater than 60 on the same page. 
const ArrayFilter=()=>{
    const arr=[70,83,38,65,49,94]
    var count=0
    const newarr=arr.filter((num)=>{
        if(num.age<60)
            return false;
        else{
            count+=1
            return true;
        }
    })
    return(<>
        <h1>Array After Filter </h1>
       { newarr.map((value)=>
            {
                return <h1>{value}</h1>
            })}
        <h1>Total Number of persons are {count}</h1>
    </>
    ) //output:- ABC
                //DEF
}
export default ArrayFilter;