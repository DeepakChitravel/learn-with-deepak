import React from 'react';
import { Container, Card, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { CheckCircleFill, ClockFill } from 'react-bootstrap-icons';

const completedTopics = [
  "Fundamentals of Computers",
  "MS Office (Word, Excel, PowerPoint)",
  "Programming in C",
  "HTML",
  "CSS"
];

const pendingTopics = [
  "Programming in C++",
  "JavaScript",
  "Java",
  "Mobile Application Development",
  "Soft Skills"
];

const ApplicationCourse = () => {
  return (
    <Container className="my-5">
      <Card className="shadow rounded-4 border-0 p-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="fw-bold text-primary mb-3">
                Application Developer <span className="text-dark">(Web & Mobile)</span>
              </h2>
              <p className="mb-2">
                <strong>Duration:</strong> <span className="text-muted">5 Months</span>
              </p>
              <p className="mb-2">
                <strong>Start Date:</strong> <span className="text-muted">13/03/2025</span>
              </p>
              <p className="mb-2">
                <strong>Scheme:</strong> <span className="text-muted">PMKVY 4.0 (Phase 3)</span>
              </p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Badge bg="success" className="fs-6 py-2 px-3 rounded-pill">
                Certified Program
              </Badge>
            </Col>
          </Row>

          <hr className="my-4" />

          <h4 className="text-secondary fw-semibold mb-3">📚 Completed Topics</h4>
          <ListGroup variant="flush" className="mb-4">
            {completedTopics.map((topic, idx) => (
              <ListGroup.Item key={idx} className="d-flex align-items-center gap-2 border-bottom">
                <CheckCircleFill color="green" size={20} />
                <span>{topic}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4 className="text-secondary fw-semibold mb-3">⏳ Pending Topics</h4>
          <ListGroup variant="flush">
            {pendingTopics.map((topic, idx) => (
              <ListGroup.Item
                key={idx}
                className="d-flex align-items-center gap-2 border-bottom text-muted"
              >
                <ClockFill color="gray" size={20} />
                <span>{topic}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ApplicationCourse;
