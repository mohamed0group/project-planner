import React, { Component } from 'react';
    
class AddTodo extends Component {
    state = {
        title: '',
        discription: ''
    }
    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value
    })
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.discription);
        this.setState({ title: '', discription: ''});
    }
    render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', borderRadius: '1.5rem' }}>
          <input 
            type='text' 
            name='title' 
            placeholder='Add Todo Title...'
            style={{flex: '3', padding: '5px'}}
            onChange={this.onChange}
            value={this.state.title}
          />
          <input 
            type='text' 
            name='discription' 
            placeholder='Add Todo Discription...'
            style={{flex: '8', padding: '5px'}}
            onChange={this.onChange}
            value={this.state.discription}
          />
          <input 
              type='submit'
              value='submit'
              className='btn'
              style={{flex: '1'}}
          />
      </form>
    );
  }
}

export default AddTodo;
