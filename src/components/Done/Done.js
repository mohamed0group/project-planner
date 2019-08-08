import React, { Component } from 'react';
import PropTypes from "prop-types";
import DoneItem from './DoneItem';

export class Done extends Component {

  render() {
    return this.props.dones.map((done) => (
      <DoneItem key={done.id} done={done} markComplete={this.props.markComplete} 
        delDone={this.props.delDone} addDone={this.props.addDone}
      />
    ));
  }
}

//PropTypes
Done.propType = {
  dones: PropTypes.array.isRequired
}
export default Done;