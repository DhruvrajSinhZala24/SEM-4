import { useContext } from "react";
import {Fname} from "./useContext_Hook";
const Comp=()=>{
    const value = useContext(Fname)
    return(
        <h1>Name={value}</h1>
    )
}
export default Comp