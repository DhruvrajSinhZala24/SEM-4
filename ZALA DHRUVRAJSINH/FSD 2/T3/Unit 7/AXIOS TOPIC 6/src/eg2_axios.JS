import React, { useState, useEffect } from 'react'
import axios from "axios";
const Randomjokeapi = () => {
    const [joke, setJoke] = useState("");
    const fetchJoke = () => {
        axios
            .get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                const { setup, punchline } = response.data;
                setJoke(`${setup} ${punchline}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchJoke();
    }, []);
    return(
        <div>
            {joke}
            <button onClick={fetchJoke} >Generate Joke </button>
        </div>
    )
}
export default Randomjokeapi