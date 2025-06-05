// Write a program to build React app to perform the tasks as asked below.
// • Add one button “Hide/Show”.
// • Add “React JS Hooks” text in h1 ,which is initially hide.
// • Initially button text should be “Show”. While clicking on it the button text should be changed to
// “Hide” and text “React Js Hooks” will be shown”
// • While clicking again on the button,button text should be changed to “Show” and text “React Js
// Hooks” will not be shown.

import React, { useState } from 'react'
const Usestatebutton = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [buttontext, setButtontext] = useState("Show");
    const buttontextupdate = () => {
        setShow(!show);
        if (show === false) {
            setButtontext("Show");
            setText(" ");
        }
        else {
            setButtontext("Hide");
            setText("React Js Hooks ");
        }
    };
    return (
        <div>
            <button onClick={buttontextupdate}>{buttontext}</button>
            <h1>{text}</h1>
        </div>
    )
}
export default Usestatebutton