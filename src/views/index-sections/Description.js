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

function Description() {
  return (
    <>
      <div className='section'>
        <div className='text-center'>
          <h4>What makes us who we are today…</h4>
          <hr style={{ width: "50%", backgroundColor: "#000" }} />
        </div>
        <br />
        <Container className='text-center'>
          <div>
            <Row>
              <Col lg='6' sm='12'>
                <p>
                  AtWandInfoTech, we develop innovative and creative products
                  and services that provide total communication and information
                  solutions. Among a plethora of services, web design and
                  development, tailor made applications, ERPs, CRMs, e-commerce
                  solutions, business-to-business applications,
                  business-to-client applications, managed hosting and internet
                  portal management are few that we offer
                </p>
                <p>
                  As a Bud in technology exploring, We wizards are committed to
                  exporting quality software worldwide.
                </p>
              </Col>
              <Col lg='6' sm='12'>
                <p>
                  The general purpose ofWandInfoTech is to develop and promote
                  advanced information technologies for multi-user operation.
                </p>
                <p>
                  WandInfoTech's business philosophy is to assure the highest
                  quality product, total client satisfaction, timely delivery of
                  solutions and the best quality/price ratio found in the
                  industry.
                </p>
                <p>
                  Our emphasis is on offering a high degree of product user
                  friendliness through a positive, creative and Logical minded
                  crew members.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Description;
