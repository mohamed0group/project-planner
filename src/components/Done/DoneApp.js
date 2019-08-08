import React, { Component } from 'react';
import DoneCard from './DoneCard';
import uuid from 'uuid';
export class DoneApp extends Component {
    state = {
        dones: [{
            id: uuid.v4(),
            title: 'project name & types',
            discription:'asdasdasc',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'planning',
            discription: 'asdcwfqegv',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'start cooding',
            discription: 'discriptionvqve',
            completed: false
        }]
    }

// Toggle Complete
markComplete = (id) => {
    this.setState({ dones: this.state.dones.map(done => {
        if(done.id === id) {
            done.completed = !done.completed
        }
        return done
    }) });
}

// Delete Done
delDone = (id) => {
    this.setState({ dones: [...this.state.dones.filter(done => done.id !== id)] });
}

// Add Done
addDone = (title, discription) => {
    const newDone = {
        id: uuid.v4(),
        title,
        discription,
        completed: false
    }
    this.setState({ dones: [...this.state.dones, newDone ]});
}
    render() {
        return (
            <DoneCard dones={this.state.dones} markComplete={this.markComplete} delDone={this.delDone} addDone={this.addDone}/>
        )
    }
}

export default DoneApp;