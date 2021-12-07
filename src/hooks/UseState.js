import React, { useState } from 'react'

export default function UseState() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const Increment = () => {
        setCounter( counter + 1);
    }
    const Input = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <h1>useState hook</h1>
            <p>useState allows you to have state variables in functional components.</p>
            <div style={{marginTop:'15px'}}>
                <h3>Welcome {inputValue}</h3>
                <input placeholder="Enter your name" onChange={Input} />
            </div>
            <div style={{marginTop:'15px'}}>
                <h3>{counter}</h3>
                <button onClick={Increment}>Increment</button>
            </div>
        </div>
    )
}
