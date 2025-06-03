// Create a program to build React app having buttons to increment and decrement the number
// by clicking that respective button. Also, increment of the number should be performed only if
// number is less than 10 and decrement of the number should be performed if number is greater
// than 0.

import { useState } from "react";
const Prog1 = () => {
    const [num, setnum] = useState(0)
    function increment() {
        if (num < 10) {
            setnum(num + 1);
        }
        else {
            return false;
        }
    }
    function decrement() {
        if (num > 0) {
            setnum(num - 1);
        }
        else {
            return false;
        }
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1> {num} </h1>
        </div>
    )
}
export default Prog1