import * as React from "react";
import { Col, Row } from "react-bootstrap";
import Icon from "./icon";

const Field = ({ details }) => {
  return (
    <Row className="field_section">
      <Col lg={2} md={2} sm={2} xs={2}>
        <div className="icon_outer">
          <div className="icon_inner">
            <Icon icon={details.node.img} />
          </div>
        </div>
      </Col>
      <Col lg={8} md={8} sm={6} xs={6}>
        <h2 className="field_h2">{details.node.title}</h2>
        <div className="field_desc">
          <p className="field_p">{details.node.desc}</p>
        </div>
      </Col>
    </Row>
  );
};

export default Field;
