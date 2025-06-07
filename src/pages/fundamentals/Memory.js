import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Memory = () => {
  return (
    <div id="memory" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Types of Computer Memory</h2>

        {/* Primary Memory */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Primary Memory (Internal Memory)</Card.Title>
            <Card.Text>
              Primary memory is the part of computer memory that the CPU can access directly. It is also known as main memory or internal memory.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>RAM (Random Access Memory):</strong> Temporary, volatile memory used to run multiple applications. Faster and improves device responsiveness.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Types of RAM:</strong> DRAM (Dynamic RAM), SRAM (Static RAM)
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>ROM (Read Only Memory):</strong> Non-volatile memory. Stores data permanently even when power is off.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Types of ROM:</strong><br />
                <ul>
                  <li><strong>PROM:</strong> Programmable Read-Only Memory</li>
                  <li><strong>EPROM:</strong> Erasable Programmable Read-Only Memory</li>
                  <li><strong>EEPROM:</strong> Electrically Erasable Programmable Read-Only Memory</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Secondary Memory */}
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Secondary Memory (External Memory)</Card.Title>
            <Card.Text>
              Secondary memory is used for long-term data storage and retrieval. It stores programs and data even when the computer is powered off.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Flash Drive</ListGroup.Item>
              <ListGroup.Item>Magnetic Disk</ListGroup.Item>
              <ListGroup.Item>Magnetic Tapes</ListGroup.Item>
              <ListGroup.Item>CD (Compact Disc)</ListGroup.Item>
              <ListGroup.Item>DVD (Digital Versatile Disc)</ListGroup.Item>
              <ListGroup.Item>Blu-ray Disc</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Memory;
