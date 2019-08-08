import React, { Component } from 'react';
import PropTypes from "prop-types";
import PrograssItem from './PrograssItem';

export class Prograss extends Component {

  render() {
    return this.props.progs.map((prog) => (
      <PrograssItem key={prog.id} prog={prog} markComplete={this.props.markComplete} 
        delProg={this.props.delProg} addProg={this.props.addProg}
      />
    ));
  }
}

//PropTypes
Prograss.propType = {
  progs: PropTypes.array.isRequired
}
export default Prograss;