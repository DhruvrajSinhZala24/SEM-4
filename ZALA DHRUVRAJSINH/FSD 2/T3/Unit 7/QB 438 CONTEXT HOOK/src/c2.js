import {useContext} from "react";
import {col1,col2} from "./P"
function Comps(){
    const n1=useContext(col1)
    const n2=useContext(col2)
    return(<h1 style={{color:n1,backgroundColor:n2}}>Full Stack Devlopment</h1>)
}
export default Comps;