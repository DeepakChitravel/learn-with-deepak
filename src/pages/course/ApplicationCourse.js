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
  const bgColor = completed ? "#e8f5e9" : "#fff3e0";
  const textColor = completed ? "#2e7d32" : "#ef6c00";
  const Icon = completed ? CheckCircleFill : ClockFill;
  const iconColor = completed ? "#43a047" : "#fb8c00";

  return (
    <Card
      className="border-0 shadow-sm h-100 topic-card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "0.75rem",
        transition: "all 0.3s ease",
        cursor: "default"
      }}
    >
      <Card.Body className="d-flex align-items-center gap-3">
        <Icon size={22} color={iconColor} />
        <span className="fw-medium" style={{ fontSize: '15px' }}>{title}</span>
      </Card.Body>
    </Card>
  );
};

const ApplicationCourse = () => {
  return (
    <Container className="my-5">
      {/* Header Card */}
      <Card
        className="shadow-sm rounded-4 border-0 p-4 mb-5"
        style={{
          background: "linear-gradient(to right, #e3f2fd, #fff)",
          borderLeft: "6px solid #0d6efd"
        }}
      >
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="fw-bold text-primary mb-1">
                Application Developer <small className="text-dark fs-5 fw-normal">(Web & Mobile)</small>
              </h2>
              <Row className="text-muted fs-6 mt-3">
                <Col xs={6} sm={4}>
                  <strong>Duration:</strong> <span className="ms-1">5 Months</span>
                </Col>
                <Col xs={6} sm={4}>
                  <strong>Start Date:</strong> <span className="ms-1">13/03/2025</span>
                </Col>
                <Col xs={12} sm={4}>
                  <strong>Scheme:</strong>
                  <Badge
                    bg="success"
                    className="ms-2 py-1 px-2 rounded-pill shadow-sm"
                    style={{ fontSize: "0.75rem", verticalAlign: "middle" }}
                  >
                    PMKVY 4.0 (Phase 3)
                  </Badge>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Badge bg="primary" className="fs-6 py-2 px-3 rounded-pill shadow-sm">
                🎓 Certified Program
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Completed Topics */}
      <section className="mb-5">
        <h4 className="text-secondary fw-semibold mb-3">✅ Completed Topics</h4>
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {completedTopics.map((topic, idx) => (
            <Col key={idx}>
              <TopicBox title={topic} completed={true} />
            </Col>
          ))}
        </Row>
      </section>

      {/* Pending Topics */}
      <section>
        <h4 className="text-secondary fw-semibold mb-3">⏳ Pending Topics</h4>
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
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
