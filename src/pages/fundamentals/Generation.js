import React from 'react';
import { FaMicrochip, FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';
import '../../css/IntroPage.css'; // Reuse styles

const Generation = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-heading">💻 Computer Generations</h2>

      <div className="generation-grid">
        <div className="generation-item generation-first">
          <h4><FaMicrochip className="gen-icon" /> First Generation (1940 - 1956)</h4>
          <ul>
            <li>Technology: Vacuum Tubes</li>
            <li>Large size, high heat, low reliability</li>
          </ul>
        </div>

        <div className="generation-item generation-second">
          <h4><FaIndustry className="gen-icon" /> Second Generation (1956 - 1963)</h4>
          <ul>
            <li>Technology: Transistors</li>
            <li>Smaller, more reliable, efficient</li>
            <li>Early high-level programming languages</li>
          </ul>
        </div>

        <div className="generation-item generation-third">
          <h4><FaNetworkWired className="gen-icon" /> Third Generation (1964 - 1971)</h4>
          <ul>
            <li>Technology: Integrated Circuits</li>
            <li>On-chip components, higher speed</li>
            <li>Support for multitasking and GUIs</li>
          </ul>
        </div>

        <div className="generation-item generation-fifth">
          <h4><FaRobot className="gen-icon" /> Fifth Generation (2010+)</h4>
          <ul>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Natural language processing</li>
            <li>Focus on future innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Generation;
