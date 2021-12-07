import React, { useState } from 'react'
import { useRef } from "react";

export default function UseRef() {
    const inputRef = useRef(null);
    const [name, setName] = useState('React');

    //Set the name and clear the text box when the button click
    const btnClick = () => {
        if(inputRef.current.value !== ''){
            setName(inputRef.current.value);
            inputRef.current.value = "";
        }
        
    };

    return (
        <div>
            <h1 style={{marginTop:'35px'}}>useRef hook</h1>
            <p>"useRef hook allows to directly create a reference to the DOM element in the functional component. (like document.getElementById())" </p>
            <div>
                <h3>{name}</h3>
                <input type="text" placeholder="react" ref={inputRef} />
                <button onClick={btnClick} >Change Name</button>
            </div>
        </div>
    )
}
