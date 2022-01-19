import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';




function Resume() {

   const popover1 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">HTML5</Popover.Title>
    
  </Popover>
);

 const popover2 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">CSS3</Popover.Title>
    <Popover.Content>
      Advanced
    </Popover.Content>
  </Popover>
);

 const popover3 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">GIT</Popover.Title>
    <Popover.Content>
      Intermediate/Advanced
    </Popover.Content>
  </Popover>
);

 const popover4 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">BOOTSTRAP4/5</Popover.Title>
    <Popover.Content>
      Intermediate/Advanced
    </Popover.Content>
  </Popover>
);

 const popover5 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">JAVASCRIPT</Popover.Title>
    <Popover.Content>
      Intermediate/Advanced
    </Popover.Content>
  </Popover>
);

 const popover6 = (
  <Popover id="popover-contained" className="Popover" style={{marginLeft:"10px"}}>
    <Popover.Title as="h3">REACT</Popover.Title>
    <Popover.Content>
      Intermediate
    </Popover.Content>
  </Popover>
);

 const popover7 = (
  <Popover id="popover-contained" className="Popover" style={{marginRight:"10px"}}>
    <Popover.Title as="h3">NODE JS</Popover.Title>
    <Popover.Content>
      Beginning
    </Popover.Content>
  </Popover>
);

 const popover8 = (
  <Popover id="popover-contained" className="Popover" style={{marginRight:"10px"}}>
    <Popover.Title as="h3">EXPRESS JS</Popover.Title>
    <Popover.Content>
      Beginning
    </Popover.Content>
  </Popover>
);

 const popover9 = (
  <Popover id="popover-contained" className="Popover" style={{marginRight:"10px"}}>
    <Popover.Title as="h3">MongoDB</Popover.Title>
    <Popover.Content>
      Beginning
    </Popover.Content>
  </Popover>
);


   

  return (
     <section id="resume" className="sec-about pt-5 pb-5">
  
      <div className="">
        <Row className="justify-content-center text-center">
          <Col className="md-10 lg-8">
            <h1 className="h4">Skills</h1>
            <p className="mt-4 mb-4">A snapshot of various skills I've amassed and continue to improve upon on my journey to becoming a Full Stack Web Developer</p>
          </Col>
        </Row>
      </div>
      

      <Container className="container features" style={{ display: "flex",justifyContent: "center"}}>

        <Row className="align-items-center text-center pt-5 pb-5">
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover1}>
            <FontAwesomeIcon  className="faIcon1" icon={['fab', 'html5']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
            
          </Col>
          
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover2}>
            <FontAwesomeIcon className="faIcon2" icon={['fab', 'css3']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover3}>
            <FontAwesomeIcon className="faIcon3" icon={['fab', 'github']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover4}>
            <FontAwesomeIcon className="faIcon4" icon={['fab', 'bootstrap']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover5}>
            <FontAwesomeIcon className="faIcon5" icon={['fab', 'js-square']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover6}>
            <FontAwesomeIcon className="faIcon6" icon={['fab', 'react']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="left" overlay={popover7}>
            <FontAwesomeIcon className="faIcon7" icon={['fab', 'node']} style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="left" overlay={popover8}>
            <FontAwesomeIcon className="faIcon8" icon="code" style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="feature-title"></h4>
            <OverlayTrigger trigger="hover" placement="left" overlay={popover9}>
            <FontAwesomeIcon className="faIcon9npm" icon="code" style={{ fontSize: "90px" }} />
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

export default Resume;