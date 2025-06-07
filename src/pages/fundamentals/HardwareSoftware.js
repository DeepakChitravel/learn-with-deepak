import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const HardwareSoftware = () => {
  return (
    <div id="hardware-software" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Hardware and Software</h2>

        <Row>
          {/* Hardware Section */}
          <Col md={6}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Hardware</Card.Title>
                <Card.Text>
                  Hardware refers to the **physical components** of a computer system. These are tangible parts that you can see and touch.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>CPU (Central Processing Unit)</ListGroup.Item>
                  <ListGroup.Item>Hard Disk</ListGroup.Item>
                  <ListGroup.Item>Monitor</ListGroup.Item>
                  <ListGroup.Item>Keyboard</ListGroup.Item>
                  <ListGroup.Item>Mouse</ListGroup.Item>
                  <ListGroup.Item>Motherboard</ListGroup.Item>
                  <ListGroup.Item>GPU / Memory Card</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Software Section */}
          <Col md={6}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>Software</Card.Title>
                <Card.Text>
                  Software is a **collection of instructions and data** that tells the computer how to work. It enables users to interact with the system and perform specific tasks.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Types of Software:</strong></ListGroup.Item>
                  <ListGroup.Item><strong>1. System Software</strong> - Includes Operating Systems (OS) and Utility Programs.</ListGroup.Item>
                  <ListGroup.Item><strong>2. Application Software</strong> - Includes Generalized and Customized Packages.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HardwareSoftware;
