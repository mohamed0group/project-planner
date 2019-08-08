import React, { Component } from 'react';
import PrograssCard from './PrograssCard';
import uuid from 'uuid';
export class PrograssApp extends Component {
    state = {
        progs: [{
            id: uuid.v4(),
            title: 'What went well',
            discription: "During learning and developing the prototype, I found it quite simple to create and quickly modify a React project. Also, it's really convenience working with npm dependencies.",
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'What did not go well',
            discription: "Although I have mentioned that it's convenience working with dependencies, there are problems with that too. A project can end up with too many unnecessary dependencies or updating dependencies can cause errors.",
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'hat was interesting',
            discription:"I am still working on React stage updating since it is not working as I expected. When I fill in a comment form and submit it, I am not able to clear the text. I have researched the issue but there's not a proper solution yet.",
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Plan for next week',
            discription:"* Figure out how to fix the stage update* Add modify and delete comment function",
            completed: false
        }]
    }

// Toggle Complete
markComplete = (id) => {
    this.setState({ progs: this.state.progs.map(prog => {
        if(prog.id === id) {
            prog.completed = !prog.completed
        }
        return prog
    }) });
}

// Delete Prograss
delProg = (id) => {
    this.setState({ progs: [...this.state.progs.filter(prog => prog.id !== id)] });
}

// Add Prograss
addProg = (title, discription) => {
    const newProg = {
        id: uuid.v4(),
        title,
        discription,
        completed: false
    }
    this.setState({ progs: [...this.state.progs, newProg ]});
}
    render() {
        return (
            <PrograssCard progs={this.state.progs} markComplete={this.markComplete} delProg={this.delProg} addProg={this.addProg}/>
        )
    }
}

export default PrograssApp;