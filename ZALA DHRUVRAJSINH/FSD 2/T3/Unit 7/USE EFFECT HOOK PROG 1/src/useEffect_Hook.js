// Write a reactJS program to perform the tasks as asked below.
// • Take two usestate for count and calculation.
// • Add one button and increment count by one with each click of button.
// • useEffect will apply for change value of calculation.
// • Value of calculation will change by two times of count .
// • Effect will be triggered every time when update the value of count .

import React, { useEffect, useState } from 'react'
const Useeffecthook = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p></div>
    )
}
export default Useeffecthook