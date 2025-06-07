import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const ProgrammingLanguages = () => {
  return (
    <div id="programming-languages" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Data Representation & Types of Programming Languages</h2>

        {/* Data Representation */}
        

        {/* Machine Language */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Machine Language</Card.Title>
            <Card.Text>
              Machine Language is the <strong>lowest level</strong> of language. It consists of <strong>binary code (0s and 1s)</strong> and is directly executed by the computer.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Assembly Language */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Assembly Language</Card.Title>
            <Card.Text>
              Assembly Language uses <strong>symbolic codes (mnemonics)</strong> to represent machine instructions. It is a low-level language and requires an <strong>assembler</strong> to translate it into machine code.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* High-Level Languages */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>High-Level Languages</Card.Title>
            <Card.Text>
              High-level languages are <strong>easier to read and write</strong>. They are translated into machine code using a <strong>compiler or interpreter</strong>.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Basic:</strong> Beginner All-Purpose Symbolic Instruction Code</ListGroup.Item>
              <ListGroup.Item><strong>COBOL:</strong> Common Business Oriented Language (1950s, used in business, finance, and government)</ListGroup.Item>
              <ListGroup.Item><strong>FORTRAN:</strong> Formula Translation (1950s, used in scientific and engineering applications)</ListGroup.Item>
              <ListGroup.Item><strong>C:</strong> Procedural Programming Language</ListGroup.Item>
              <ListGroup.Item><strong>C++:</strong> Object-Oriented Language</ListGroup.Item>
              <ListGroup.Item><strong>Java:</strong> Object-Oriented Language</ListGroup.Item>
              <ListGroup.Item><strong>Python:</strong> Object-Oriented & Scripting Language</ListGroup.Item>
              <ListGroup.Item><strong>Ruby:</strong> Object-Oriented & Scripting Language</ListGroup.Item>
              <ListGroup.Item><strong>PHP:</strong> Scripting Language, mainly for web development</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Markup Languages */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Markup Languages</Card.Title>
            <Card.Text>
              Used to define and style document structure, especially in <strong>web development and data exchange</strong>.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>HTML:</strong> HyperText Markup Language</ListGroup.Item>
              <ListGroup.Item><strong>CSS:</strong> Cascading Style Sheets</ListGroup.Item>
              <ListGroup.Item><strong>XML:</strong> eXtensible Markup Language</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Functional, Logical & Visual Languages */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Other Programming Paradigms</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Functional Languages:</strong> Lisp, Scheme</ListGroup.Item>
              <ListGroup.Item><strong>Logical Languages:</strong> Prolog, Mercury (used in AI & NLP)</ListGroup.Item>
              <ListGroup.Item><strong>Visual Languages:</strong> Used for GUI-based interactions (e.g., Adobe Photoshop, Illustrator, XD, Game Development Tools)</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Data Representation</Card.Title>
            <Card.Text>
              Data representation refers to the way data is stored, processed, and transmitted within the computer system.
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
    </div>
  );
};

export default ProgrammingLanguages;
