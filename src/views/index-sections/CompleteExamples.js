import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples(props) {
  const { newItems } = props;
  return (
    <>
      <div>
        <Container className="text-center">
          {newItems.map((x) => {
            return (
              <Row className="justify-content-md-center">
                <Col lg="8" md="12">
                  <h2 className="title">{x.name}</h2>
                  <h5 className="description">
                    <b>{x.field}</b>
                  </h5>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
