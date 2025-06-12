// Radio Button
// Program:- Create a React Form for select any of pizza size using radio button.

import React from 'react';
import { useState } from 'react';
function Myform3() {
    const [topping, setTopping] = useState('Medium');
    const onOptionChange = e => {
        setTopping(e.target.value);
    };
    return (
        <div>
            <h3>Select Pizza Size</h3>
            <form>
                <input
                    type='radio'
                    name='topping'
                    value='Regular'
                    checked={topping === 'Regular'}
                    onChange={onOptionChange}
                />
                <label>Regular</label>

                <input
                    type='radio'
                    name='topping'
                    value='Medium'
                    checked={topping === 'Medium'}
                    onChange={onOptionChange}
                />
                <label>Medium</label>

                <input
                    type='radio'
                    name='topping'
                    value='Large'
                    checked={topping === 'Large'}
                    onChange={onOptionChange}
                />
                <label>Large</label>
            </form>
            <p>
                Select topping <strong>{topping}</strong>
            </p>
        </div>
    );
}
export default Myform3