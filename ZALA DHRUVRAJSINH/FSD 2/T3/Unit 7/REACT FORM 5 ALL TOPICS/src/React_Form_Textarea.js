import { useState } from 'react';
// function MyForm1() {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was: ${name}`)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }
// export default MyForm1

// import { useState } from 'react';
function MyForm4() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }
    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}
export default MyForm4