import { useState } from "react";

function MyForm2() {
    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
        setMyCar(event.target.value)
    }
    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export default MyForm2