// Write a program to build React app having a button which changes image by clicking it.


import React, { useState } from 'react'
const Usestatecsschange = () => {
    const [Href1,setsrc] = useState("m5.jpg");
    function updateImage() {
        setsrc("iphone.jpg");
    };
    function updateImageToOrignal() {
        setsrc("m5.jpg");
    };
    
    return (
        <div>
            <img src={Href1} height={300} width={300}></img>
            <button onClick={updateImage}> Change Image </button>
            <button onClick={updateImageToOrignal}> Change Image To Original</button>
            
        </div>
    )
}
export default Usestatecsschange