import React, { Component } from 'react'
import PropTypes from "prop-types";

export class PrograssItem extends Component {
  getStyle = () => {
    return {
      padding: '2rem 1rem',
      marginBottom: '2rem',
      borderRadius: '0.3rem',
      backgroundColor: this.props.prog.completed ? 
      'salmon' : '#ffffff'
    }
  }

  render() {
    const { id, title, discription} = this.props.prog;
    return (
      <div style={this.getStyle()}>
        <p className='lead'>
        <input type='checkbox' onChange={this.props.markComplete
          .bind(this, id)}/> { ' ' }
          <strong>{ title }</strong>
          <button onClick={this.props.delProg
          .bind(this, id)} className='btnStyle'
          >x</button><br/>
          { discription }
        </p>
      </div>
    )
  }
}
 
//PropTypes
PrograssItem.propType = {
  prog: PropTypes.object.isRequired,
  getStyle: PropTypes.func.isRequired
}

export default PrograssItem;
