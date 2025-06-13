import React from 'react';
import { Outlet } from 'react-router-dom';
import JavaScriptSidebar from '../../components/JavaScriptSidebar';
import '../../css/FundamentalsLayout.css';

const JavaScriptLayout = () => {
  return (
    <div className="layout-container">
      {/* Left Sidebar */}
      <JavaScriptSidebar />

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
        <h1>JavaScript is Coming up</h1>
      </div>

      {/* Right Advertisement */}
      <div className="ad-section">
        {/* Microsoft Certificate */}
        <div className="ad-box mb-4">
          <p><strong>🎓 Microsoft Learn</strong></p>
          <a
            href="https://learn.microsoft.com/en-us/training/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://learn.microsoft.com/en-us/media/learn/home/hero-learn.svg"
              alt="Microsoft Learn"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px' }}>Free modules & certificates from Microsoft.</p>
          </a>
        </div>

        {/* Postman Certificate */}
        <div className="ad-box mb-4">
          <p><strong>🧪 Postman Academy</strong></p>
          <a
            href="https://academy.postman.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
              alt="Postman Academy"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px' }}>Master APIs & earn free certification.</p>
          </a>
        </div>

        {/* LinkedIn Learning */}
        <div className="ad-box">
          <p><strong>📘 LinkedIn Learning</strong></p>
          <a
            href="https://www.linkedin.com/learning/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
              alt="LinkedIn Learning"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px' }}>Upskill with LinkedIn Learning – 1 Month Free!</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptLayout;
