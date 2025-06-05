import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/1.jpeg";
import img6 from "./images/2.jpeg";
import img7 from "./images/3.jpeg";
import img8 from "./images/4.jpeg";
import img9 from "./images/1.jpeg";
import img10 from "./images/2.jpeg";
import img11 from "./images/3.jpeg";
import img12 from "./images/4.jpeg";

import React,{useState} from 'react';
const Alldata = [
    { categoty: "mobile", pic: img1 }, { categoty: "led", pic: img2 }, { categoty: "Bike", pic: img3 }, {
        categoty: "cycle",
        pic: img4
    }, { categoty: "mobile", pic: img5 },
    { categoty: "led", pic: img6 }, { categoty: "Bike", pic: img7 }, { categoty: "cycle", pic: img8 }, {
        categoty: "mobile",
        pic: img9
    }, { categoty: "led", pic: img10 }, { categoty: "Bick", pic: img11 }, { categoty: "cycle", pic: img12 }
];
const UsestateImagefilter = () => {
    const [image, setImage] = useState(Alldata);

    const allItem = () => {
        const finaldata = Alldata.filter((value) => { return value; });
        setImage(finaldata);
    }
    const fltCategory = (categoryItem) => {
        const finaldata = Alldata.filter((value) => { return value.categoty == categoryItem });
        setImage(finaldata);
    }
    return (
        <div>
            <button onClick={allItem}>All category</button>
            <button onClick={() => fltCategory('mobile')}>MOBILE</button>
            <button onClick={() => fltCategory('led')}>LED</button>
            <button onClick={() => fltCategory('Bike')}>Bike</button>
            <button onClick={() => fltCategory('cycle')}>Cycle</button>
            {
                image.map((value) => {
                    return (<img src={value.pic} />)
                })
            }
        </div>
    )
}
export default UsestateImagefilter