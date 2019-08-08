import React, { Component } from 'react'
import PropTypes from "prop-types";
export class StoriesItem extends Component {
  getStyle = () => {
    return {
      padding: '2rem 1rem',
      marginBottom: '2rem',
      borderRadius: '0.3rem',
      backgroundColor: this.props.storie.completed ? 
      'salmon' : '#ffffff'
    }
  }

  render() {
    const { id, title, discription} = this.props.storie;
    return (
      <div style={this.getStyle()}>
        <p className='lead'>
        <input type='checkbox' onChange={this.props.markComplete
          .bind(this, id)}/> { ' ' }
          <strong>{ title }</strong>
          <button onClick={this.props.delStorie
          .bind(this, id)} className='btnStyle'
          >x</button><br/>
          { discription }
        </p>
      </div>
    )
  }
}
 
//PropTypes
StoriesItem.propType = {
  storie: PropTypes.object.isRequired,
  getStyle: PropTypes.func.isRequired
}

export default StoriesItem;
