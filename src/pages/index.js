import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import productImg from "../images/productImg.jpg";
import Field from "../components/field";

const IndexPage = ({ data }) => {
  const { fields } = data;
  return (
    <div className="product_section">
      <Container className="product_info">
        <Row>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className="product_img">
              <img src={productImg} alt="product image" />
            </div>
          </Col>
          <Col lg={8} md={12} sm={12} xs={12}>
            <div className="product_text">
              <h2>Eka-Tempo Baking Powder</h2>
              <p>Single acting baking powder.</p>
              <div className="product_fields">
                {fields.edges.map((field, index) => (
                  <Field key={index} details={field} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const query = graphql`
  query GetFields {
    fields: allFieldsJson {
      edges {
        node {
          desc
          title
          img
        }
      }
    }
  }
`;

export default IndexPage;
