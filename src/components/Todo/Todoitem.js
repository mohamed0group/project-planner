import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      padding: '2rem 1rem',
      marginBottom: '2rem',
      borderRadius: '0.3rem',
      backgroundColor: this.props.todo.completed ? 
      'salmon' : '#ffffff'
    }
  }

  render() {
    const { id, title, discription} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p className='lead'>
        <input type='checkbox' onChange={this.props.markComplete
          .bind(this, id)}/> { ' ' }
          <strong>{ title }</strong>
          <button onClick={this.props.delTodo
          .bind(this, id)} className='btnStyle'
          >x</button><br/>
          { discription }
        </p>
      </div>
    )
  }
}
 
//PropTypes
Todoitem.propType = {
  todo: PropTypes.object.isRequired,
  getStyle: PropTypes.func.isRequired
}

export default Todoitem;
