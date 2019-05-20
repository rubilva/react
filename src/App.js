import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import StateApp from './StateApp/StateApp'

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
        {name: 'John', age: 6},
        {name: 'Mario', age: 25}
    ]
  });

  const [otherState, setOtherState] = useState('This is the other state!')

  const switchNameHandler = () => {        
    setPersonsState({persons: [
        {name: 'Rodrigo', age: 10},
        {name: 'Gaby', age: 40}
    ]});
  }

  return (
  <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <Person name="Ruben" age="20">Atividade: Estudante de Engenharia</Person>
      <hr />
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <hr />
      <StateApp />
    </div>
  );
  
  //return React.createElement('div', {class: 'App'}, React.createElement('h1', null, 'This is a test'))
}

export default App;
