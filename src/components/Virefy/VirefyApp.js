import React, { Component } from 'react';
import VirefyCard from './VirefyCard';
import uuid from 'uuid';
export class VirefyApp extends Component {
    state = {
        vfys: [{
            id: uuid.v4(),
            title: 'project name & types',
            discription: 'asd',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'planning',
            discription:'woooow',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'start cooding',
            discription: 'wow',
            completed: false
        }]
    }

// Toggle Complete
markComplete = (id) => {
    this.setState({ vfys: this.state.vfys.map(vfy => {
        if(vfy.id === id) {
            vfy.completed = !vfy.completed
        }
        return vfy
    }) });
}

// Delete Virefy
delVfy = (id) => {
    this.setState({ vfys: [...this.state.vfys.filter(vfy => vfy.id !== id)] });
}

// Add Virefy
addVfy = (title, discription) => {
    const newVfy = {
        id: uuid.v4(),
        title,
        discription,
        completed: false
    }
    this.setState({ vfys: [...this.state.vfys, newVfy ]});
}
    render() {
        return (
            <VirefyCard vfys={this.state.vfys} markComplete={this.markComplete} delVfy={this.delVfy} addVfy={this.addVfy}/>
        )
    }
}

export default VirefyApp;