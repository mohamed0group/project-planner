import React, { Component } from 'react';
import PropTypes from "prop-types";
import StoriesItem from './StoriesItem';

export class Stories extends Component {

  render() {
    return this.props.stories.map((storie) => (
      <StoriesItem key={storie.id} storie={storie} markComplete={this.props.markComplete} 
        delStorie={this.props.delStorie} addStorie={this.props.addStorie}
      />
    ));
  }
}

//PropTypes
Stories.propType = {
  stories: PropTypes.array.isRequired
}
export default Stories;