
// Write a ReactJS script to create a digital clock running continuously.
// (useEffect)

import { useState, useEffect } from 'react';
function UE22() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, [])
    return (
        <h1>
            Time using Localtimestring - {date.toLocaleTimeString()}<br />
            Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()}
        </h1>
    );
}
export default UE22;