import React, { Component } from 'react';
import TodoCard from './TodoCard';
import uuid from 'uuid';
export class TodoApp extends Component {
    state = {
        todos: [{
            id: uuid.v4(),
            title: 'project name & types',
            discription: 'asd',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'planning',
            discription: 'acf',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'start cooding',
            discription: 'la',
            completed: false
        }]
    }

// Toggle Complete
markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    }) });
}

// Delete Todo
delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

// Add Todo
addTodo = (title, discription) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        discription,
        completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ]});
}
    render() {
        return (
            <TodoCard todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} addTodo={this.addTodo}/>
        )
    }
}

export default TodoApp;