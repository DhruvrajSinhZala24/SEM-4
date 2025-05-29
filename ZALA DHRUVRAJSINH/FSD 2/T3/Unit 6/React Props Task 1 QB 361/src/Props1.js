import Car from './Car'
function Props1(){
    const carinfo={bg:"yellow",color:"red",fontsize:"25px",fontstyle:"italic"}
    return(
        <>
        <Car brand={carinfo}/>
        </>
    )
}
export default Props1