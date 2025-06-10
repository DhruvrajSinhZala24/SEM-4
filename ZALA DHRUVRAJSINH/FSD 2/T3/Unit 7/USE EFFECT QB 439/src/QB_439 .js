// Create a ReactJS program using function component having two input fields
// for num1 and num2 and two buttons for addition and subtraction of the two
// numbers. Display the respective outputs on same page using useState hook.
// Also display alert box as an effect on every time the addition button is clicked
// using useEffect hook. 

import React, { useState, useEffect } from 'react'
const UE2 = () => {
    const [count, setcount] = useState(0);
    const [calculation, setcal] = useState(0);
    useEffect(() => {
        alert("Clicked")
    }, [count]);
    const changeCount = () => {
        setcount(count + 1);
    }
    const changeCount1=()=>{
        setcount(count-1)
    }
    return (
        <div>
            <>
            <button onClick={changeCount}>Button ADD {count}</button><br />
            <button onClick={changeCount1}>Button SUB {count}</button><br />
            </>
        </div>
    )
}
export default UE2