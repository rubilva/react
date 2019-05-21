import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import StateApp from './StateApp/StateApp'

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 1, name: 'João', age: 16},
            {id: 2, name: 'Mario', age: 25},
            {id: 3, name: 'Carlos', age:4}
        ]
    });

    const deletePersonHandler = (personIndex) => {
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({persons: persons});
    }

    const [showPersonState, setShowPersonState] = useState({
        showPersons: false
    });

    const togglePersonsHandler = () => {
        const doesShow = showPersonState.showPersons;
        setShowPersonState({showPersons: !doesShow})
    }

    let persons = null;

    if (showPersonState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return <Person
                        name={person.name}
                        age={person.age}
                        click={() => deletePersonHandler(index)}
                        key={person.id} />
                })}
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
