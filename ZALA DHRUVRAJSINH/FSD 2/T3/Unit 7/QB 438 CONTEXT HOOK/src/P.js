//Create a React app with three components: parent component P.js and two
// child components C1.js, C2.js.
//  Use useContext hook to pass two colors from the Parent component P.js to the
// Child component C2.js. (Yellow color as font color and Blue color as
// background color)
// In Child component C1.js import child component C2.js .
// In C2.js display “Full stack Development” text in h1 heading with above
// mentioned background color and font color using context.
// QB 437 is same
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
