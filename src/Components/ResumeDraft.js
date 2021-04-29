import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resume = () => {
    return (
        <section id="resume" class="sec-about pt-5 pb-5">


            <div className="">
                <Row className="justify-content-center text-center">
                    <Col className="md-10 lg-8">
                        <h1 className="h4">Skills</h1>
                        <p className="mt-4 mb-4">A snapshot of various skills I've amassed and continue to improve upon on my journey to becoming a Full Stack Web Developer</p>
                    </Col>
                </Row>
            </div>

            <Container className="container features" style={{ display: "flex" }}>

                <Row className="align-items-center text-center pt-5 pb-5">
                    <Col className="col-lg-4 col-md-4 col-sm-1">
                        <h4 className="feature-title">HTML5</h4>
                        <FontAwesomeIcon icon={['fab', 'html5']} style={{ fontSize: "90px" }} />

                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">CSS3</h4>
                        <FontAwesomeIcon icon={['fab', 'css3']} style={{ fontSize: "90px" }} />
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">Git</h4>
                        <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: "90px" }} />
                    </Col>
                </Row>
                <Row className="align-items-center text-center">
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">Bootstrap</h4>
                        <FontAwesomeIcon icon={['fab', 'bootstrap']} style={{ fontSize: "90px" }} />
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">JavaScript</h4>
                        <FontAwesomeIcon icon={['fab', 'js-square']} style={{ fontSize: "90px" }} />
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">React</h4>
                        <FontAwesomeIcon icon={['fab', 'react']} style={{ fontSize: "90px" }} />
                    </Col>
                </Row>
                <Row className="align-items-center text-center">
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">Node</h4>
                        <FontAwesomeIcon icon={['fab', 'node']} style={{ fontSize: "90px" }} />
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">Express JS</h4>
                        <FontAwesomeIcon icon="code" style={{ fontSize: "90px" }} />
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12">
                        <h4 className="feature-title">MongoDB</h4>
                        <FontAwesomeIcon icon="code" style={{ fontSize: "90px" }} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;