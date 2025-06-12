import { useState, useEffect } from "react";
import axios from 'axios';
const Randomimages=()=>{
    const[myimg,setimg]=useState('')
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/image/random").then((v)=>setimg(v.data)).catch((err)=>console.log(err))
    })
    return(<img src={myimg.message} height='300px' width='300px' />)
}
export default Randomimages;