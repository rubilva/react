import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  
  return (
    <div class="App">
      <h1>Hi, I'm a React app!</h1>
      <Person name="Ruben" age="20">Atividade: Estudante de Engenharia</Person>
      <Person name="João" age="89"/>
    </div>

  );
  
  //return React.createElement('div', {class: 'App'}, React.createElement('h1', null, 'This is a test'))
}

export default App;
