// Write a program to build React app to perform the tasks as asked below.
// • Add two buttons “Change Font” and “Change Color”
// • Add heading “LJ University” in Green color(initial)
// By clicking on “Change Font” button font of text (LJ University) should be changed and By
// clicking on “Change color” button color of text should be changed to red


import React, { useState } from 'react'
const Usestatecsschange = () => {
    const [color1, setColor1] = useState('green');
    const [font1, setFont1] = useState(20);
    function updateColor() {
        setColor1('red');
    };
    function updateColorToOriginal() {
        setColor1('green');
    };
    function updateFont() {
        setFont1(50);
    };
    function updateFontToOriginal() {
        setFont1(20);
    };
    return (
        <div>
            <h1 style={{ color: color1, fontSize: font1 }}>LJ University</h1>
            <button onClick={updateColor}> Change color </button>
            <button onClick={updateColorToOriginal}> Change color to Original</button> <br/><br/>
            <button onClick={updateFont}> Change Font </button>
            <button onClick={updateFontToOriginal}> Change Font to Original</button>
        </div>
    )
}
export default Usestatecsschange