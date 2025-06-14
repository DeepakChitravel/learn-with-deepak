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
  const bgColor = completed ? "#f0fdf4" : "#fff7ed";
  const textColor = completed ? "#15803d" : "#b45309";
  const Icon = completed ? CheckCircleFill : ClockFill;
  const iconColor = completed ? "#22c55e" : "#f97316";

  return (
    <Card className="border-0 h-100 rounded-4 shadow-sm">
      <Card.Body
        className="d-flex align-items-center gap-3 px-3 py-2"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Icon size={24} color={iconColor} />
        <span className="fw-semibold" style={{ fontSize: '15px' }}>{title}</span>
      </Card.Body>
    </Card>
  );
};

const ApplicationCourse = () => {
  return (
    <Container className="py-5">
      {/* Header Card */}
      <Card className="shadow-lg border-0 rounded-4 mb-5 bg-white">
        <Card.Body className="p-4">
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="fw-bold text-primary mb-2">
                Application Developer <small className="text-muted fs-5">(Web & Mobile)</small>
              </h2>
              <Row className="text-secondary fs-6">
                <Col xs={6} sm={4}><strong>Duration:</strong> 5 Months</Col>
                <Col xs={6} sm={4}><strong>Start Date:</strong> 13/03/2025</Col>
                <Col xs={12} sm={4} className="mt-2 mt-sm-0">
                  <strong>Scheme:</strong>
                  <Badge bg="success" className="ms-2 rounded-pill shadow-sm">PMKVY 4.0 (Phase 3)</Badge>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="text-md-end mt-4 mt-md-0">
              <Badge bg="primary" className="fs-6 py-2 px-3 rounded-pill shadow">🎓 Certified Program</Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Completed Topics */}
      <section className="mb-5">
        <h4 className="text-dark fw-semibold mb-4 border-start border-4 ps-3 border-success">
          ✅ Completed Topics
        </h4>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {completedTopics.map((topic, idx) => (
            <Col key={idx}>
              <TopicBox title={topic} completed={true} />
            </Col>
          ))}
        </Row>
      </section>

      {/* Pending Topics */}
      <section>
        <h4 className="text-dark fw-semibold mb-4 border-start border-4 ps-3 border-warning">
          ⏳ Pending Topics
        </h4>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {pendingTopics.map((topic, idx) => (
            <Col key={idx}>
              <TopicBox title={topic} completed={false} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default ApplicationCourse;