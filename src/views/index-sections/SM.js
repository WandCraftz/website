import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { InteriorExterior } from "../../Data/DataList";

// core components

function SM(props) {
  const { items } = props;
  return (
    <>
      <div className="section section-nucleo-icons text-center">
        <Container>
          {items.map((x, i) => {
            console.log(x.field);
            return (
              <Card key={i} style={{ width: "300px" }}>
                <Container className="bg-info text-white">
                  <CardHeader className="bg-info">
                    <h3
                      style={{ fontSize: "16px", paddingBottom: "10px" }}
                      className="title text-center"
                    >
                      {x.name}
                    </h3>
                  </CardHeader>
                </Container>
                <CardBody>
                  <h5 className="description text-left">
                    {x.field.map((y, i) => (
                      <ul key={i}>
                        <b className="">
                          <li style={{ fontSize: "14px" }}>{y}</li>
                        </b>
                      </ul>
                    ))}
                  </h5>
                </CardBody>
              </Card>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default SM;
