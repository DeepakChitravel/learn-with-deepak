import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const CSSIntro = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-sm border-0 rounded-4">
        <h2 className="text-primary fw-bold mb-3">🎨 CSS Introduction</h2>

        <h4 className="text-secondary">👨‍🔬 Who Invented CSS?</h4>
        <p>
          CSS, which stands for <strong>Cascading Style Sheet</strong>, was invented by <strong>Håkon Wium Lie</strong> in <strong>1994</strong> while working at <strong>CERN</strong>, the European Organization for Nuclear Research. He collaborated with <strong>Tim Berners-Lee</strong>, the inventor of the World Wide Web.
        </p>
        <p>
          Before CSS, web pages were styled using only HTML, which had limited formatting options like bold and italics. As websites became more complex, CSS was introduced to separate content from presentation, improve flexibility, and enhance maintainability.
        </p>

        <hr />

        <p><strong>Full Form:</strong> Cascading Style Sheet</p>
        <p><strong>Developer:</strong> Håkon Wium Lie</p>
        <p><strong>Released Date:</strong> October 10, 1994</p>

        <p>
          CSS is used to control the layout and presentation of HTML elements. It allows you to apply styles to multiple pages at once using a <code>.css</code> file. With CSS, you can define colors, fonts, spacing, background images, borders, and more.
        </p>

        <hr />

        <h4 className="text-secondary fw-semibold mb-3">🧱 CSS Syntax</h4>
        <p>Example:</p>
        <pre><code>h1 &#123; color: red; &#125;</code></pre>

        <hr />

        <h4 className="text-secondary fw-semibold mb-3">📝 CSS Text Formatting Properties</h4>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Color</td>
              <td>Predefined Color Name</td>
              <td><code>h1 &#123; color: red; &#125;</code></td>
            </tr>
            <tr>
              <td>Text Align</td>
              <td>left | right | center | justify</td>
              <td><code>h1 &#123; text-align: justify; &#125;</code></td>
            </tr>
            <tr>
              <td>Font Family</td>
              <td>Font Name</td>
              <td><code>h1 &#123; font-family: 'Times New Roman'; &#125;</code></td>
            </tr>
            <tr>
              <td>Font Style</td>
              <td>normal | italic</td>
              <td><code>p &#123; font-style: italic; &#125;</code></td>
            </tr>
            <tr>
              <td>Font Weight</td>
              <td>normal | bold</td>
              <td><code>p &#123; font-weight: bold; &#125;</code></td>
            </tr>
            <tr>
              <td>Font Size</td>
              <td>Size in pixels</td>
              <td><code>h1 &#123; font-size: 14px; &#125;</code></td>
            </tr>
          </tbody>
        </Table>

        <hr />

        <h4 className="text-secondary fw-semibold mb-3">🌈 Background & Border Properties</h4>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background Color</td>
              <td>Color Name</td>
              <td><code>body &#123; background-color: blue; &#125;</code></td>
            </tr>
            <tr>
              <td>Border</td>
              <td>10px solid red</td>
              <td><code>h1 &#123; border: 10px solid red; &#125;</code></td>
            </tr>
            <tr>
              <td>Background Image</td>
              <td>URL</td>
              <td><code>body &#123; background-image: url('image.jpg'); &#125;</code></td>
            </tr>
            <tr>
              <td>Background Position</td>
              <td>left | right | center</td>
              <td><code>body &#123; background-position: left; &#125;</code></td>
            </tr>
          </tbody>
        </Table>

        <hr />

        <h4 className="text-secondary fw-semibold mb-3">📏 Margin Properties</h4>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Margin Top</td>
              <td>Size in pixels</td>
              <td><code>h1 &#123; margin-top: 50px; &#125;</code></td>
            </tr>
            <tr>
              <td>Margin Bottom</td>
              <td>Size in pixels</td>
              <td><code>h1 &#123; margin-bottom: 50px; &#125;</code></td>
            </tr>
          </tbody>
        </Table>

        <p className="text-center mt-4 text-muted fst-italic">Thank you for watching!</p>
      </Card>
    </Container>
  );
};

export default CSSIntro;
