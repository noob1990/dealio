import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer}  text-white py-4 my-4`}>
      <Container>
        <Row>
          {/* <Col md={4}>
            <h5>The agency for impatient brands®</h5>
          </Col> */}
          <Col md={4}>
          <div style={{ maxWidth: "400px", margin: "0 auto"}}>
            <Accordion className={styles.accordion}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Dealio?</Accordion.Header>
                <Accordion.Body>
                Dealio connects customers and businesses through great deals.

                Each business on the platform has created a 'one-time deal' (20% off or better) for you to try out and tell your friends about! After you use their one-time deal, each business then provides a smaller deal (10% off or better) for returning customers every time you return.

                We thank you for using Dealio and for supporting your local small businesses.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          </Col>
          <Col>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Accordion className={styles.accordion}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Deal-Seekers</Accordion.Header>
                <Accordion.Body>
                Coupons keep money in your pocket, but who's got time to scour the net for deals? Let us do the hard work for you. Set up an account (coming soon), customize your profile and we'll let you know when your favorite types of deals are available in your community.

                Explore new businesses that you wouldn't have gone to without seeing them on Dealio.

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          </Col>
          <Col md={4}>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Accordion className={styles.accordion}>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Business Owners</Accordion.Header>
                <Accordion.Body>
                <p>Take charge of your advertising campaign and bring in new customers and turn them into returning customers. Our control panel has all the tools you need to manage coupons as well as monitor usage through monthly reports and detailed analytics.

                Dealio is different from other advertising platforms because we only charge $0.50 per coupon used. No up-front fees. No monthly fees. You only pay if it works.</p>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col className={styles.paraFooter}>
            <p><a href="https://admin.joindealio.com/#/login" target="_blank">To sign up go here: <span className={styles.underline}>admin.joindealio.com</span> and begin by selecting “Sign Up.”</a></p>
            <p>Problems? Email us at: <span className={styles.underline}> contact@joindealio.com </span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
