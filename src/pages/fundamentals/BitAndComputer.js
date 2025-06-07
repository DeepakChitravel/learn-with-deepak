import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const BitAndComputer = () => {
  return (
    <div id="bit-and-computer" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Bit and Byte Conversion & Types of Computers</h2>

        {/* Bit and Byte Conversion */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Bit and Byte Conversion</Card.Title>
            <Card.Text>
              <strong>Bit</strong> is short for <em>binary digit</em>, the smallest unit of data in a computer, represented by 0s and 1s. It's used in telecommunications, data speed, voltage, etc.
              <br /><br />
              <strong>Byte</strong> is a group of 8 bits, used as the standard unit for representing a single character of data, storing movies, images, and more.
            </Card.Text>
            <ListGroup variant="flush">
  <ListGroup.Item>1 Byte = 8 Bits</ListGroup.Item>
  <ListGroup.Item>1 Kilobyte (KB) = 1024 Bytes</ListGroup.Item>
  <ListGroup.Item>1 Megabyte (MB) = 1024 KB</ListGroup.Item>
  <ListGroup.Item>1 Gigabyte (GB) = 1024 MB</ListGroup.Item>
  <ListGroup.Item>1 Terabyte (TB) = 1024 GB</ListGroup.Item>
  <ListGroup.Item>1 Petabyte (PB) = 1024 TB</ListGroup.Item>
  <ListGroup.Item>1 Exabyte (EB) = 1024 PB</ListGroup.Item>
  <ListGroup.Item>1 Zettabyte (ZB) = 1024 EB</ListGroup.Item>
  <ListGroup.Item>1 Yottabyte (YB) = 1024 ZB</ListGroup.Item>
  <ListGroup.Item>1 Brontobyte (BB) = 1024 YB</ListGroup.Item>
</ListGroup>

          </Card.Body>
        </Card>

        {/* Computer Classifications */}
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Types of Computers</Card.Title>
            <Card.Text>
              Computers are classified into four main types:
            </Card.Text>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item><strong>Analog Computer:</strong> Processes continuous data.</ListGroup.Item>
              <ListGroup.Item><strong>Digital Computer:</strong> Processes discrete data, uses binary.</ListGroup.Item>
              <ListGroup.Item><strong>Hybrid Computer:</strong> Combines analog and digital features.</ListGroup.Item>
              <ListGroup.Item><strong>Modern Computer:</strong> Advanced, high-speed machines.</ListGroup.Item>
            </ListGroup>

            <Card.Subtitle className="mb-3">Types of Modern Computers:</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Supercomputer:</strong> Used by NASA, ISRO for complex simulations.</ListGroup.Item>
              <ListGroup.Item><strong>Mainframe Computer:</strong> Used as ISP Internet Servers.</ListGroup.Item>
              <ListGroup.Item><strong>Minicomputer:</strong> Used by large IT companies for multiple users.</ListGroup.Item>
              <ListGroup.Item><strong>Microcomputer:</strong> Personal computers like PCs, laptops, PDAs.</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BitAndComputer;
