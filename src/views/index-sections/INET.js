import {
  softwareDevlopement,
  billingSoftwares,
  designing,
  invitations,
  Editing,
  pcBuilding,
} from "Data/DataList";
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import CompleteExamples from "./CompleteExamples";
import SM from "./SM";

// core components

function INET() {
  return (
    <>
      <div className='section' id='services'>
        <div className='text-center'>
          <h1 className='title'>Services</h1>
          <hr style={{ width: "70%", backgroundColor: "#000" }} />
          <h3>Services are Provided by Wand Info Tech.</h3>
        </div>
        <Row>
          <Col lg='4' sm='12'>
            <SM items={softwareDevlopement} />
          </Col>
          <Col lg='4' sm='12'>
            <SM items={billingSoftwares} />
          </Col>

          <Col lg='4' sm='12'>
            <SM items={designing} />
          </Col>
          <Col lg='4' sm='12'>
            <SM items={pcBuilding} />
          </Col>
          <Col lg='4' sm='12'>
            <SM items={invitations} />
          </Col>
          <Col lg='4' sm='12'>
            <SM items={Editing} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default INET;
