import React, { Component } from 'react';
import Person from '../Person/Person'

class StateApp extends Component {
    state = {
        persons: [
            {id: 1, name: 'Tiago', age: 10},
            {id: 2, name: 'Luis', age: 83},
            {id: 3, name: 'Carlos', age: 21}
        ],
        test: 'Don\'t change',
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
        this.setState({persons: persons});
    }

    deletePersonHandler = (personsIndex) => {
        //const persons = this.state.persons.slice;
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({persons: persons})
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

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '5px solid blue',
            borderRadius: '6px',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            click= {() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            );
        }

        return (
            <div>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>{this.state.buttonName} Persons</button>
                {persons}
            </div>
        );
    }

}

export default StateApp;
