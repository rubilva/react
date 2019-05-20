import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import StateApp from './StateApp/StateApp'

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'John', age: 6 },
            { name: 'Mario', age: 25 }
        ]
    });

    const [showPersonState, setShowPersonState] = useState({
        showPersons: false
    });

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 10 },
                { name: 'Gaby', age: 40 }
            ]
        });
    }

    const togglePersonsHandler = () => {
        const doesShow = showPersonState.showPersons;
        setShowPersonState({showPersons: !doesShow})
    }

    let persons = null;

    if (showPersonState.showPersons) {
        persons = (
            <div>
                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                    click={() => switchNameHandler('Gaga')} />
                <Person
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age} />
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Stateless App Component</h1>
            <button onClick={togglePersonsHandler}>Persons</button>
            {persons}
            <hr />
            <h1>Stateful App Component</h1>
            <StateApp />
        </div>
    );

    //return React.createElement('div', {class: 'App'}, React.createElement('h1', null, 'This is a test'))
}

export default App;
