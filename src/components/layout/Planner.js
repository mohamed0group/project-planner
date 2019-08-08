import React, { Component } from 'react';
import DoneApp from '../Done/DoneApp';
import PrograssApp from '../Prograss/PrograssApp';
import StoriesApp from '../Stories/StoriesApp';
import TodoApp from '../Todo/TodoApp';
import VirefyApp from '../Virefy/VirefyApp';
import { Row } from 'reactstrap';
export class Planner extends Component {
  render() {
    return (
      <div className="myBody">
        <Row><StoriesApp/></Row>        
        <Row><TodoApp/></Row>        
        <Row><PrograssApp/></Row>        
        <Row><VirefyApp/></Row>        
        <Row><DoneApp/></Row>
      </div>
    );
  }
}

export default Planner;
