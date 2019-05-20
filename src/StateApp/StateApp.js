import React, {Component} from 'react';
import Person from '../Person/Person'

class StateApp extends Component {
    state = {
        persons: [
            {name: 'Tiago', age: 10},
            {name: 'Louis', age: 40}
        ]
    }

    switchNameHandler = () => {
        console.log('Clicked!');
    }

    render() {
        return (
            <div>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            </div>
        );
    }
}

export default StateApp;