import React, { Component } from 'react';
import Person from '../Person/Person'

class StateApp extends Component {
    state = {
        persons: [
            { name: 'Tiago', age: 10 },
            { name: 'Luis', age: 83 },
            { name: 'Carlos', age: 21 }
        ],
        test: 'Don\'t change',
        showPersons: false,
        buttonName: 'Show'
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 10 },
                { name: 'Yve', age: 40 }
            ]
        });
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
                            click={() => this.deletePersonHandler(index)}
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
