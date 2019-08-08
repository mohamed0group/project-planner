import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Stories from './Stories';
import AddStories from './AddStories';
class StoriesCard extends Component {
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
            Stories
            </NavLink>
          </NavItem>
          <NavItem className={classnames({ tabs: this.state.activeTab === '2' })}>
            <NavLink onClick={() => { this.toggle('2'); }}>
              Add New Storie
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Stories stories={this.props.stories} markComplete={this.props.markComplete} delStorie={this.props.delStorie} addStorie={this.props.addStorie}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <CardBody>
                    <AddStories addStorie={this.props.addStorie}/>    
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
export default StoriesCard;