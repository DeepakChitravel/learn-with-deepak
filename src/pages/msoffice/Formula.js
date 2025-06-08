// src/pages/msword/Formula.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const Formula = () => {
  return (
    <Container className="my-5">
      <Card className="shadow rounded-4 border-0">
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">📝 MS Word Formula & Shortcuts</h2>

          {/* RAND() Function */}
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">RAND() Function</Card.Header>
            <Card.Body>
              <p>
                The <code>=RAND()</code> function in MS Word generates placeholder text paragraphs.
                By default, it creates several paragraphs of sample text.
              </p>
              <p>
                You can specify the number of paragraphs and sentences per paragraph like this:
              </p>
              <pre>=RAND(paragraphs, sentences)</pre>
              <p>For example: <code>=RAND(3,4)</code> generates 3 paragraphs with 4 sentences each.</p>
            </Card.Body>
          </Card>

          {/* Text Selection */}
          <Card className="mb-4">
            <Card.Header className="bg-success text-white">Text Selection Shortcut</Card.Header>
            <Card.Body>
              <p>
                Use <strong>Ctrl + Shift + Arrow Keys</strong> to select text efficiently:
              </p>
              <ListGroup variant="flush">
                <ListGroup.Item><code>Ctrl + Shift + Right/Left Arrow</code> — Select word by word horizontally</ListGroup.Item>
                <ListGroup.Item><code>Ctrl + Shift + Up/Down Arrow</code> — Select paragraph by paragraph vertically</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          {/* Text Alignment */}
          <Card>
            <Card.Header className="bg-warning text-dark">Text Alignment Types</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Left Align</strong> (<code>Ctrl + L</code>) — Aligns text to the left margin (ragged right)</ListGroup.Item>
                <ListGroup.Item><strong>Right Align</strong> (<code>Ctrl + R</code>) — Aligns text to the right margin (ragged left)</ListGroup.Item>
                <ListGroup.Item><strong>Center Align</strong> (<code>Ctrl + E</code>) — Centers text between margins</ListGroup.Item>
                <ListGroup.Item><strong>Justify Align</strong> (<code>Ctrl + J</code>) — Aligns text evenly on both sides by adjusting spacing</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Formula;
