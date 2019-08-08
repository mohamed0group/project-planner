import React, { Component } from 'react';
import StoriesCard from './StoriesCard';
import uuid from 'uuid';
export class StoriesApp extends Component {
    state = {
        stories: [{
            id: uuid.v4(),
            title: 'What is the project about',
            discription: "My group project is about developing a web application for travellers and tourists to check on the diseases and allergies at their destination.",
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a traveller',
            discription:'I want to enter a location, so that I can see disease outbreaks and allergies.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a user',
            discription:'I want to sign up, so that I can plan and save my trips.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a user',
            discription:'I want to log in, so that I can save my plans. ',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a user',
            discription:'I want to save my locations, so that I can see the data in the future.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a user',
            discription:'I want to edit my save infomation, so that I can correct any mistakes.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As a user',
            discription:'I want to input my personal allergies, so that I can be aware of posible risks of my traval destinations.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As an admin',
            discription:'I want to be able to manage the urls of the external databases, so that I can update them.',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'As an admin',
            discription:'I want to be able to upload a database file, so I can update my databases.',
            completed: false
        }]
    }

// Toggle Complete
markComplete = (id) => {
    this.setState({ stories: this.state.stories.map(storie => {
        if(storie.id === id) {
            storie.completed = !storie.completed
        }
        return storie
    }) });
}

// Delete Storie
delStorie = (id) => {
    this.setState({ stories: [...this.state.stories.filter(storie => storie.id !== id)] });
}

// Add Storie
addStorie = (title, discription) => {
    const newStorie = {
        id: uuid.v4(),
        title,
        discription,
        completed: false
    }
    this.setState({ stories: [...this.state.stories, newStorie ]});
}
    render() {
        return (
            <StoriesCard stories={this.state.stories} markComplete={this.markComplete} delStorie={this.delStorie} addStorie={this.addStorie}/>
        )
    }
}

export default StoriesApp;