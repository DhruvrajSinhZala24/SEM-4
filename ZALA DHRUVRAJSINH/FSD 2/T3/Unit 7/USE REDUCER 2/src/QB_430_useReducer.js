import React, { useReducer } from 'react';
const initialstate = 0;
function reducer(state, action) {
    if (action.type === 'increment') {
        return state + 1;
    }
    if (action.type === 'decrement') {
        return state - 1;
    }
}
const UseRed = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (<>
        <button onClick={() => dispatch({ type: "increment" })}>
            Click ({state}) </button>
        <br/>
        <br/>
        
        <button onClick={() => dispatch({ type: "decrement" })}>
            click 2 ({state}) </button>
    </>
    );
}
export default UseRed