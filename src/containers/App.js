import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Tiago', age: 10 },
            { id: 2, name: 'Luis', age: 83 },
            { id: 3, name: 'Carlos', age: 21 }
        ],
        showPersons: false,
        buttonName: 'Show'
    }

    nameChangedHandler = (event, id) => {
        // Procuramos a pessoa do id
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });
        // Clonamos a pessoa pois iremos editar um campo (nome)
        const person = { ...this.state.persons[personIndex] }
        // Editamos o nome no clone
        person.name = event.target.value;
        // Obtemos um clone das pessoas todas
        const persons = [...this.state.persons];
        // Substituimos a pessoa original, na lista clonada, pelo clone da pessoa com o nome alterado
        persons[personIndex] = person;
        // Alteramos a lista de pessoas, para a nova lista, com a nova pessoa editada
        this.setState({ persons: persons });
    }

    deletePersonHandler = (personsIndex) => {
        //const persons = this.state.persons.slice;
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({ persons: persons })
    }

    switchButtonNameHandler = () => {
        const name = this.state.buttonName;
        switch (name) {
            case 'Show':
                this.setState({ buttonName: 'Hide' });
                break;
            case 'Hide':
                this.setState({ buttonName: 'Show' });
                break;
            default:
                break;
        }
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
        this.switchButtonNameHandler();
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
        }

        return (
            <div className='App'>
                <Cockpit
                    onClick={this.togglePersonsHandler}
                    buttonName={this.state.buttonName} />
                {persons}
            </div>
        );
    }
}

export default App;
