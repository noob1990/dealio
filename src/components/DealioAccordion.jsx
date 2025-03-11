import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const DealioAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Card>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Dealio?</Accordion.Header>
          <Accordion.Body>
            Dealio connects customers and businesses through great deals.
            <br />
            <br />
            Each business on the platform has created a 'one-time deal' (20% off or better) for you to try out and tell your friends about! After you use their one-time deal, each business then provides a smaller deal (10% off or better) for returning customers every time you return.
            <br />
            <br />
            We thank you for using Dealio and for supporting your local small businesses.
          </Accordion.Body>
        </Accordion.Item>
      </Card>

      <Card>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Deal-Seekers</Accordion.Header>
          <Accordion.Body>
            Coupons keep money in your pocket, but who's got time to scour the net for deals? Let us do the hard work for you. Set up an account (coming soon), customize your profile and we'll let you know when your favorite types of deals are available in your community.
            <br />
            <br />
            Explore new businesses that you wouldn't have gone to without seeing them on Dealio.
          </Accordion.Body>
        </Accordion.Item>
      </Card>

      <Card>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Business Owners</Accordion.Header>
          <Accordion.Body>
            Take charge of your advertising campaign and bring in new customers and turn them into returning customers. Our control panel has all the tools you need to manage coupons as well as monitor usage through monthly reports and detailed analytics.
            <br />
            <br />
            Dealio is different from other advertising platforms because we only charge $0.50 per coupon used. No up-front fees. No monthly fees. You only pay if it works.
            <br />
            <br />
            To sign up go here: admin.joindealio.com and begin by selecting “Sign Up.”
            <br />
            <br />
            Problems? Email us at contact@joindealio.com
          </Accordion.Body>
        </Accordion.Item>
      </Card>
    </Accordion>
  );
};

export default DealioAccordion;
