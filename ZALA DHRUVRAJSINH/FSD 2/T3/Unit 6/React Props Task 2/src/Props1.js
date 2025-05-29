import Car from './Car'
function Props1(){
    const carinfo={name:"abc",roll:1,t1:25,t2:24}
    return(
        <>
        <Car brand={carinfo}/>
        </>
    )
}
export default Props1