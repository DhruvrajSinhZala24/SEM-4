import {useContext} from "react";
import {num1,num2} from "./useContext_Hook"
function Comps(){
    const n1=useContext(num1)
    const n2=useContext(num2)
    return(<h1>Multiplication = {n1*n2}</h1>)
}
export default Comps;