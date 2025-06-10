import { createContext} from "react";
import Comp1 from "./Comp1";
const num1=createContext()
const num2=createContext()
function Comp(){
    return(<>
    <num1.Provider value="20">
    <num2.Provider value="5">
    <Comp1/>
    </num2.Provider>
    </num1.Provider>
    </>)
}
export default Comp;
export{num1,num2}