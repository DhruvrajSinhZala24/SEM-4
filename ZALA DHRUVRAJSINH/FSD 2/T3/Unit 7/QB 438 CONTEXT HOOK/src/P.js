import { createContext} from "react";
import C1 from "./c1";
const col1=createContext()
const col2=createContext()
function Comp(){
    return(<>
    <col1.Provider value="yellow">
    <col2.Provider value="blue">
    <C1/>
    </col2.Provider>
    </col1.Provider>
    </>)
}
export default Comp;
export{col1,col2}