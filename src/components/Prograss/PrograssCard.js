import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Prograss from './Prograss';
import AddPrograss from './AddPrograss';
class PrograssCard extends Component {
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
              Prograss
            </NavLink>
          </NavItem>
          <NavItem className={classnames({ tabs: this.state.activeTab === '2' })}>
            <NavLink onClick={() => { this.toggle('2'); }}>
              Add New Prograss
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Prograss progs={this.props.progs} markComplete={this.props.markComplete} delProg={this.props.delProg} addProg={this.props.addProg}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <CardBody>
                    <AddPrograss addProg={this.props.addProg}/>    
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
export default PrograssCard;