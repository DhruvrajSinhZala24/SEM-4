// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people.
// Apply filter to find people with age less than 40. And display name of all
// people using map function.
const ArrayFilter=()=>{
    const arr=[{name:"ABC",age:39},{name:"DEF",age:40},{name:"GHI",age:45}]
    const newarr=arr.filter((num)=>{
        if(num.age>40)
            return false;
        else
            return true;
    })
    return(
        
            newarr.map((value,index)=>
            {
                return <h1>{value.name}</h1>
            })
        
    ) //output:- ABC
                //DEF
}
export default ArrayFilter;