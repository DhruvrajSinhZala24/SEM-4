const ArrayFilter=()=>{
    const arr=[1,2,3,4,5]
    const newarr=arr.filter((num)=>{
        if(num==3)
            return false;
        else
            return true;
    })
    return(<h1>Array after filter {newarr}</h1>)
}
export default ArrayFilter;