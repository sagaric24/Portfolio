import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer small-footer">
      <Row>
        <Col md="6" sm="6" className="footer-copywright">
          <p className="footer-text">Designed and Developed by Sagari Chandrashekar</p>
        </Col>
        <Col md="6" sm="6" className="footer-copywright">
          <p className="footer-text">Copyright © {year} SC</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;