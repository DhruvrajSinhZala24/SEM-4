function Football1(){
    const shoot = (a) =>{
        alert(a)
    }
    return(
        <button onClick={()=>shoot("Goal")}>Make a Goal </button>
    )
}
export default Football1