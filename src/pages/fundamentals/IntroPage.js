// src/pages/fundamentals/IntroPage.js
import React from 'react';
import '../../css/IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-heading">💻 Introduction of Computer</h2>

      <section>
        <h4>🧠 What is a Computer?</h4>
        <p>
          A <strong>computer</strong> is an electronic device that stores, retrieves, and processes data.
          It responds to specific sets of instructions to perform tasks efficiently.
        </p>
        <p>
          <strong>Full Form:</strong> <em>Commonly Operating Machine Purposely Used for Technological and Educational Research</em>
        </p>
      </section>

      <hr />

      <section>
        <h4>📅 When Was the Computer Created?</h4>
        <p>Computers were developed in the <strong>20th century</strong> and have evolved rapidly since.</p>
      </section>

      <hr />

      <section>
        <h4>👨‍🔬 Father of Computer: <span className="text-success">Charles Babbage</span></h4>
        <ul>
          <li><strong>Date of Birth:</strong> 26-12-1791</li>
          <li><strong>Date of Death:</strong> 18-10-1871</li>
          <li><strong>Born in:</strong> London</li>
          <li><strong>Profession:</strong> Mathematician, Philosopher, Inventor, Mechanical Engineer</li>
        </ul>
        <p>
          He designed the <strong>Analytical Engine</strong> – considered the first mechanical general-purpose computer.
        </p>
        <p>
          His son, <strong>Henry Babbage</strong>, completed a working model in <strong>1910</strong>, demonstrating basic calculations.
        </p>
      </section>

      <hr />

      <section>
        <h4>👩‍💻 Mother of Computer: <span className="text-primary">Ada Lovelace</span></h4>
        <ul>
          <li><strong>Date of Birth:</strong> 10-12-1815</li>
          <li><strong>Date of Death:</strong> 27-11-1852</li>
          <li><strong>Born in:</strong> London</li>
          <li><strong>Mother:</strong> Lady Anna Isabella Milbanke</li>
          <li><strong>Passion:</strong> Deeply interested in mathematics from childhood</li>
          <li><strong>Contribution:</strong> Authored the first computer program for Babbage's Analytical Engine in the 1840s</li>
        </ul>
      </section>

      <hr />

      <section>
        <h4>🧩 CPU Components</h4>
        <p><strong>Computer = ALU + CU</strong></p>
        <ul>
          <li><strong>ALU (Arithmetic Logic Unit):</strong> Handles arithmetic and logical operations</li>
          <li><strong>CU (Control Unit):</strong> Directs all processor operations using binary decoding</li>
          <li><strong>FPU (Floating Point Unit):</strong> A co-processor for high-precision math calculations</li>
        </ul>
      </section>

      <hr />

      <section>
        <p className="intro-subtitle text-muted">📘 More content about computer generations coming soon...</p>
      </section>
    </div>
  );
};

export default IntroPage;
