import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function useEffect_Hook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return <h1>I've rendered {count} times!</h1>;
}
export default useEffect_Hook