import React from 'react';
import { FaKeyboard, FaMouse, FaMicrochip, FaTv, FaMemory, FaCamera, FaPrint, FaHeadphones } from 'react-icons/fa';
import '../../css/IntroPage.css'; // Reuse common styles

const Devices = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-heading">🖥️ Computer Devices</h2>

      <p><strong>There are four main types of computer devices:</strong></p>

      {/* Input Devices */}
      <div className="generation-item">
        <h4><FaKeyboard className="gen-icon" /> Input Devices</h4>
        <p>Used to provide data and control signals to a computer system.</p>
        <ul>
          <li>Keyboard</li>
          <li>Mouse</li>
          <li>Joystick</li>
          <li>Motherboard (interface for inputs)</li>
          <li>Scanner</li>
          <li>Microphone</li>
          <li>Digital Camera</li>
          <li>Light Pen</li>
        </ul>
      </div>

      {/* Output Devices */}
      <div className="generation-item">
        <h4><FaTv className="gen-icon" /> Output Devices</h4>
        <p>Display or output data that has been processed by the computer.</p>
        <ul>
          <li>Monitor</li>
          <li>Printer</li>
          <li>Projector</li>
          <li>Speaker</li>
          <li>Headphones</li>
          <li>Plotter</li>
        </ul>
      </div>

      {/* Processing Devices */}
      <div className="generation-item">
        <h4><FaMicrochip className="gen-icon" /> Processing Devices</h4>
        <p>Process the input data and generate the desired output.</p>
        <ul>
          <li>CPU (Central Processing Unit)</li>
          <li>GPU (Graphical Processing Unit)</li>
          <li>Motherboard</li>
          <li>Microprocessor</li>
        </ul>
      </div>

      {/* Memory Devices */}
      <div className="generation-item">
        <h4><FaMemory className="gen-icon" /> Memory Devices</h4>
        <p>Used to store data temporarily or permanently.</p>
        <ul>
          <li>RAM (Random Access Memory)</li>
          <li>ROM (Read-Only Memory)</li>
          <li>Hard Disk Drive (HDD)</li>
          <li>Solid State Drive (SSD)</li>
          <li>Flash Drive</li>
          <li>Optical Discs (CD/DVD)</li>
        </ul>
      </div>
    </div>
  );
};

export default Devices;
