import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Todos from './Todos';
import AddTodo from './AddTodo';
class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className='mycontainer'>
      <br/>
        <Nav tabs>
          <NavItem className={classnames({ tabs: this.state.activeTab === '1' })}>
            <NavLink onClick={() => { this.toggle('1'); }}>
              Todo
            </NavLink>
          </NavItem>
          <NavItem className={classnames({ tabs: this.state.activeTab === '2' })}>
            <NavLink onClick={() => { this.toggle('2'); }}>
              Add New Todo
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Todos todos={this.props.todos} markComplete={this.props.markComplete} delTodo={this.props.delTodo} addTodo={this.props.addTodo}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <CardBody>
                    <AddTodo addTodo={this.props.addTodo}/>    
                  </CardBody>
                </Card>
                <br/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default TodoCard;