// Write a program to build React app having 2 input fields and display the entered value on the
// same page.

import React, { useState } from 'react'
const Qb418 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    function changeFirstname(event) {
        setFirstName(event.target.value);
    }
    function changeLastname(event) {
        setLastName(event.target.value);
    }
    return (
        <>
            <div><input type="text" name="firstName" value={firstName} onChange={changeFirstname}
                placeholder='First Name' /></div>
            <div><input type="text" name="lastName" value={lastName} onChange={changeLastname}
                placeholder='Last Name' /></div>
            <h1>First Name: {firstName} Lastname: {lastName}</h1>
        </>
    )
}
export default Qb418