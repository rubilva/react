import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                { id: 1, name: 'Tiago', age: 10 },
                { id: 2, name: 'Luis', age: 83 },
                { id: 3, name: 'Carlos', age: 21 }
            ],
            showPersons: false,
            buttonName: 'Show'
        }
    }
    

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });
        const person = { ...this.state.persons[personIndex] }
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
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

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className='App'>
                <Cockpit
                    clicked={this.togglePersonsHandler}
                    buttonName={this.state.buttonName}
                />
                {persons}
            </div>
        );
    }
}

export default App;
