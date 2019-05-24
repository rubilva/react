import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '5px solid blue',
        borderRadius: '6px',
        padding: '8px',
        cursor: 'pointer'
    }

    return(
        <div>
            <h1>React App</h1>
            <p>This is a stateful app.</p>
            <button
                style={style}
                onClick={props.clicked}>{props.buttonName} Persons</button>
        </div>
    );
};

export default cockpit;