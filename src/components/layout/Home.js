import React, { Component } from 'react'

import Progress from "../../assets/image/progress.png";
import Project20 from "../../assets/image/project-report-20.png";
import Project40 from "../../assets/image/project-report-40.png";
import Project60 from "../../assets/image/project-report-60.png";
import Project90 from "../../assets/image/project-report-90.png";
import Project95 from "../../assets/image/project-report-95.png";
import { Row, Col, Jumbotron } from "reactstrap";
export class Home extends Component {
    render() {
        return (
            <div className="myBody" >
                <div className="home">
                    <div className="dark-overlay">
                        <h2 className="h2-home">Manage your project with PP</h2>
                    </div>
                </div>
                <Row>
                    <Col><img className="fit img-fluid" alt='alt' src={Project20} /></Col>
                    <Col>
                        <Jumbotron>
                            <p className="display-1 lead">in Story stage. </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Jumbotron>
                            <p className="display-1 lead">in Todo stage. </p>
                        </Jumbotron>
                    </Col>
                    <Col><img className='fit img-fluid' alt='alt' src={Project60} /></Col>
                </Row>
                <Row>
                    <Col><img className='fit img-fluid' alt='alt' src={Project40} /></Col>
                    <Col>
                    <Jumbotron>
                            <p className="display-1 lead">in Prograss stage. </p>
                        </Jumbotron>
                    </Col>
                    <Row>
                        <Col>
                        <Jumbotron>
                            <p className="display-1 lead">in Virefy stage. </p>
                        </Jumbotron>
                        </Col>
                        <Col><img className='fit img-fluid' alt='alt' src={Project95} /></Col>
                    </Row>
                </Row>
                <Row>
                    <Col><img className='fit img-fluid' alt='alt' src={Project90} /></Col>
                    <Col>
                    <Jumbotron>
                            <p className="display-1 lead">in Done stage. </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Jumbotron>
                            <p className="display-1 lead">in Testing stage. </p>
                        </Jumbotron>
                    </Col>
                    <Col><img className='fit img-fluid' alt='alt' src={Progress} /></Col>
                </Row>

            </div>
        )
    }
}

export default Home
