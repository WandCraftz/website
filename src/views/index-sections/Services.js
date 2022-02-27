import React from "react";
import "antd/dist/antd.css";
import "../style/style.css";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Statistic } from "antd";
import {
  LikeOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

// core components

function Services() {
  return (
    <>
      <div className="text-center">
        <h4>What We Have Done</h4>
        <hr style={{ width: "50%", backgroundColor: "#000" }} />
      </div>
      <div className="section">
        <Container className="text-center">
          <div>
            <Row>
              <Col lg="4" sm="12">
                <Statistic
                  title="Projects"
                  value={14}
                  suffix={<LikeOutlined />}
                />
              </Col>
              <Col lg="4" sm="12">
                <Statistic
                  title="Hours worked"
                  value="12415 Hours"
                  suffix={<ClockCircleOutlined />}
                />
              </Col>
              <Col lg="4" sm="12">
                <Statistic
                  title="Cups of Tea"
                  value="270"
                  suffix={<SmileOutlined />}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Services;
