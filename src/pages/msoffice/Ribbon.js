import React from 'react';

const Ribbon = () => {
  const sectionStyle = {
    marginTop: '24px',
    padding: '16px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    borderLeft: '5px solid #2e86de',
  };

  const headingStyle = {
    color: '#2c3e50',
    fontWeight: '700',
    fontSize: '22px',
    marginBottom: '10px',
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
    color: '#333',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#2980b9', textAlign: 'center', marginBottom: '30px' }}>🧾 MS Word Ribbon Menu Overview</h2>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>What is Ribbon?</h3>
        <ul style={listStyle}>
          <li>Ribbon is the toolbar at the top of MS Word.</li>
          <li>It replaces old dropdown menus with visual icons.</li>
          <li>Each ribbon tab has **groups** of related tools (like font, layout, etc).</li>
          <li>Makes it easier to find and use Word features quickly.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>1️⃣ Home Ribbon</h3>
        <ul style={listStyle}>
          <li>Most-used tab for editing text.</li>
          <li>Includes: Font, Paragraph, Styles, Editing.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>2️⃣ Insert Ribbon</h3>
        <ul style={listStyle}>
          <li>Adds items to your document.</li>
          <li>Includes: Pages, Tables, Pictures, Shapes, Header/Footer, Symbols.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>3️⃣ Design Ribbon</h3>
        <ul style={listStyle}>
          <li>Changes the look of your document.</li>
          <li>Includes: Document formatting, Themes, Page background.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>4️⃣ Layout Ribbon</h3>
        <ul style={listStyle}>
          <li>Controls page setup and paragraph spacing.</li>
          <li>Includes: Margins, Orientation, Columns, Indent, Spacing.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>5️⃣ References Ribbon</h3>
        <ul style={listStyle}>
          <li>Useful for research and academic writing.</li>
          <li>Includes: Table of Contents, Citations, Footnotes, Bibliography.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>6️⃣ Mailings Ribbon</h3>
        <ul style={listStyle}>
          <li>Used for sending bulk emails or letters (Mail Merge).</li>
          <li>Includes: Create, Start Mail Merge, Preview, Finish.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>7️⃣ Review Ribbon</h3>
        <ul style={listStyle}>
          <li>Used for proofreading and editing.</li>
          <li>Includes: Spelling & Grammar, Comments, Track Changes, Translate.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>8️⃣ View Ribbon</h3>
        <ul style={listStyle}>
          <li>Controls how you view your document.</li>
          <li>Includes: Print Layout, Ruler, Navigation Pane, Zoom, Split.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>9️⃣ Help Ribbon</h3>
        <ul style={listStyle}>
          <li>Provides support, help documents, and training.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>📏 Ruler in MS Word</h3>
        <ul style={listStyle}>
          <li>Controls margins and indents in your document.</li>
          <li>Helps align text, paragraphs, images, and tab stops.</li>
          <li>Makes printing more accurate and professional.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>🧭 Navigation Pane</h3>
        <ul style={listStyle}>
          <li>Helps move between pages or headings without scrolling.</li>
          <li>Three views: Headings, Pages, and Results.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>🔎 Go To Command</h3>
        <ul style={listStyle}>
          <li>Sends cursor to a specific page, section, or comment.</li>
          <li>Shortcut: <b>Ctrl + G</b></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>📝 Spelling & Grammar</h3>
        <ul style={listStyle}>
          <li>Checks spelling and grammar errors in your document.</li>
          <li>Misspelled words are underlined in red automatically.</li>
          <li>Suggestions help improve writing and tone (Microsoft Editor).</li>
        </ul>
      </div>
    </div>
  );
};

export default Ribbon;
