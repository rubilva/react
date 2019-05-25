import React, {useEffect} from 'react';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Information send to cloud');
        }, 1000);
        return(() => {
            console.log('[Cockpit] unmount return');
        });
    }, []);

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

export default React.memo(Cockpit);