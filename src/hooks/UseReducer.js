import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case "ShowText":
            return {
                count: state.count,
                showText: !state.showText
            }
        default:
            return state
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(
        reducer, {count:0, showText:true }
        )

    return (
        <div>
            <h1 style={{marginTop:'35px'}}>useReducer hook</h1>
            <p> It acts as an alternate hook to the useState hook to manage complex state in your application. The useReducer hook uses the same concept as the reducers in Redux.</p>
            <div style={{marginTop:'15px'}}>
                <h3>{state.count}</h3>
                <button onClick={ () => {
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "ShowText"});
                    }}>
                    Click Me
                </button>
            </div>
            <div style={{marginTop:'15px'}}>
                {state.showText && <h3>An even number</h3>}
            </div>
        </div>
    )
}
