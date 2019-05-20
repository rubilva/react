import React, { Component } from 'react';
import Person from '../Person/Person'

class StateApp extends Component {
    state = {
        persons: [
            { name: 'Tiago', age: 10 },
            { name: 'Louis', age: 40 }
        ],
        test: 'Don\'t change'
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

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '5px solid blue',
            borderRadius: '6px',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Jorge')}>Switch Name</button>
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
}

export default StateApp;