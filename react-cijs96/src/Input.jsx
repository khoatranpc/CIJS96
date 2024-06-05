import React from 'react';

const Input = (props) => {

    return (
        <div>
            <p>component input: {props.count}</p>
            <button onClick={() => {
                props.setCounter(props.count + 1);
            }}>Click</button>
            <br />
            <input value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input;