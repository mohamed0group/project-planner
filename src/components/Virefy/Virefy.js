import React, { Component } from 'react';
import PropTypes from "prop-types";
import VirefyItem from './VirefyItem';

export class Virefy extends Component {

  render() {
    return this.props.vfys.map((vfy) => (
      <VirefyItem key={vfy.id} vfy={vfy} markComplete={this.props.markComplete} 
        delVfy={this.props.delVfy} addVfy={this.props.addVfy}
      />
    ));
  }
}

//PropTypes
Virefy.propType = {
  vfys: PropTypes.array.isRequired
}
export default Virefy;