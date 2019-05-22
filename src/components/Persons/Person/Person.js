import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>Hi! My name is {props.name}, and I have {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click}>Delete Person</button>
        </div>
    )
};

export default person;