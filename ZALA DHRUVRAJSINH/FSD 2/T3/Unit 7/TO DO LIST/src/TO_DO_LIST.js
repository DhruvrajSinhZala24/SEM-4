// Write a program to build React app for task todo list.
// • Add 1 input field and button and by clicking on button display entered task on the same page.
// • Also, add delete button with each added task to delete the task.

import React, { useState } from 'react'
const UsestateTodoList = () => {
    const [t1, setT1] = useState([]);
    const [text, setText] = useState("");

    const deleteTask = (taskName) => {
        setT1(
            t1.filter((task) => {
                if (task !== taskName) {
                    return true;
                }
                else { return false; }
            })
        )
    }
    function handleTodolist() {
        setT1([...t1, text]);
        document.getElementById("fname").value=""
       
    }
    function handleChange(e) {
        setText(e.target.value);
        
        
    }
    
    return (
        <>
            <input type="text" id='fname' onChange={handleChange} />
            <button onClick={handleTodolist}>To DO</button>
            {
                t1.map((task) => {
                    return (
                        <div>
                            <h1>{task}</h1>
                            <button onClick={() => deleteTask(task)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default UsestateTodoList;