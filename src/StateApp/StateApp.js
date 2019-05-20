import React, { Component } from 'react';
import Person from '../Person/Person'

class StateApp extends Component {
    state = {
        persons: [
            { name: 'Tiago', age: 10 },
            { name: 'Louis', age: 40 }
        ],
        test: 'Don\'t change',
        showPersons: false,
        buttonName: 'Show'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 10 },
                { name: 'Yve', age: 40 }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 10 },
                { name: 'Yve', age: 40 }
            ]
        });
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, 'Alex')}
                        changed={this.nameChangedHandler} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age} />
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
