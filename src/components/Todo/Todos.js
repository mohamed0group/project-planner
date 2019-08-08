import React, { Component } from 'react';
import PropTypes from "prop-types";
import Todoitem from './Todoitem';

export class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
        delTodo={this.props.delTodo} addTodo={this.props.addTodo}
      />
    ));
  }
}

//PropTypes
Todos.propType = {
  todos: PropTypes.array.isRequired
}
export default Todos;