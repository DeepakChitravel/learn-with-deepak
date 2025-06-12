import React from 'react';
import '../css/CodeTemplate.css';

const CContentTemplate = ({ title, code, output }) => {
  return (
    <div className="content-container">
      <h2 className="content-title">{title}</h2>

      <div className="code-section">
        <h4>Sample Code:</h4>
        <pre className="code-block" dangerouslySetInnerHTML={{ __html: code }} />
      </div>

      <div className="output-section">
        <h4>Output:</h4>
        <pre className="output-block">{output}</pre>
      </div>
    </div>
  );
};

export default CContentTemplate;
