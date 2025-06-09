import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
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

const TopicBox = ({ title, completed }) => {
  const bgColor = completed ? "#d4edda" : "#f8d7da";
  const textColor = completed ? "#155724" : "#721c24";
  const Icon = completed ? CheckCircleFill : ClockFill;
  const iconColor = completed ? "#28a745" : "#dc3545";

  return (
    <Card
      className="border-0 shadow-sm h-100"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "0.75rem",
        transition: "0.3s",
      }}
    >
      <Card.Body className="d-flex align-items-center gap-3">
        <Icon size={24} color={iconColor} />
        <span className="fw-semibold">{title}</span>
      </Card.Body>
    </Card>
  );
};

const ApplicationCourse = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-sm rounded-4 border-0 p-4 mb-5">
        <Card.Body>
          <Row className="align-items-center mb-4">
            <Col md={8}>
              <h2 className="fw-bold text-primary mb-2">
                Application Developer{" "}
                <small className="text-dark fs-5 fw-normal">(Web & Mobile)</small>
              </h2>
              <Row className="text-muted fs-6">
                <Col xs={6} sm={4}>
                  <strong>Duration:</strong> 5 Months
                </Col>
                <Col xs={6} sm={4}>
                  <strong>Start Date:</strong> 13/03/2025
                </Col>
                <Col xs={12} sm={4}>
                  <strong>Scheme:</strong> PMKVY 4.0 (Phase 3)
                </Col>
              </Row>
            </Col>
            <Col md={4} className="d-flex justify-content-md-end mt-3 mt-md-0">
              <Badge bg="success" className="fs-6 py-2 px-3 rounded-pill shadow-sm">
                Certified Program
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <h4 className="text-secondary fw-semibold mb-3">✅ Completed Topics</h4>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 mb-5">
        {completedTopics.map((topic, idx) => (
          <Col key={idx}>
            <TopicBox title={topic} completed={true} />
          </Col>
        ))}
      </Row>

      <h4 className="text-secondary fw-semibold mb-3">⏳ Pending Topics</h4>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {pendingTopics.map((topic, idx) => (
          <Col key={idx}>
            <TopicBox title={topic} completed={false} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ApplicationCourse;
