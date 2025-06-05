// Create react js app to increase value by 5 while clicking on button. Initialize value
// with 20. Use useReducer hook to perform the task.

import React, { useReducer } from 'react'
function reducer(state, action) {
    return state + action;
}
const Qb431 = () => {
    const [state, dispatch] = useReducer(reducer, 20);
    return (
        <div align="center">
            <h1 align="center">{state}</h1>
            <button onClick={() => dispatch(5)}>Add</button>
        </div>
    )
}
export default Qb431