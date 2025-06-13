import React from 'react';

const ImageInsert = () => {
  const code = `
{/* Insert images in JSX */}
<img src="/images/sample.gif" alt="Sample GIF" width="120" />
<img src="/images/sample.jpg" alt="Sample JPEG" width="120" />
<img src="/images/sample.png" alt="Sample PNG" width="120" />
<img src="/images/sample.svg" alt="Sample SVG" width="120" />
  `.trim();

  const imageFormatsExplanation = [
    { abbr: 'GIF', full: 'Graphics Interchange Format', desc: 'supports animation and transparency, limited to 256 colors.' },
    { abbr: 'JPEG (or JPG)', full: 'Joint Photographic Experts Group', desc: 'best for photos, lossy compression.' },
    { abbr: 'PNG', full: 'Portable Network Graphics', desc: 'supports transparency, lossless compression.' },
    { abbr: 'SVG', full: 'Scalable Vector Graphics', desc: 'vector format, scalable without losing quality.' },
    { abbr: 'BMP', full: 'Bitmap Image File', desc: 'uncompressed raster image, large file size.' },
    { abbr: 'WEBP', full: 'Web Picture format', desc: 'modern format with good compression and quality.' },
  ];

  return (
    <div style={style.container}>
      <h2 style={style.title}>📷 Common Image File Formats</h2>
      <p style={style.paragraph}>
        Here are some widely used image formats with their features:
      </p>

      <ul style={style.list}>
        {imageFormatsExplanation.map(({ abbr, full, desc }, i) => (
          <li key={i}>
            <strong>{abbr}:</strong> <span style={{ fontWeight: '600' }}>{full}</span> – {desc}
          </li>
        ))}
      </ul>

      <h3 style={style.subtitle}>💻 Sample JSX Code</h3>
      <pre style={style.code}><code>{code}</code></pre>

      <h3 style={style.subtitle}>🖼️ Output</h3>
      <div style={style.outputImages}>
        <figure style={style.figure}>
          <img src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" alt="Sample GIF" width="120" />
          <figcaption style={style.caption}>GIF</figcaption>
        </figure>
        <figure style={style.figure}>
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=120&q=80" alt="Sample JPEG" width="120" />
          <figcaption style={style.caption}>JPEG</figcaption>
        </figure>
        <figure style={style.figure}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Png-transparent.png" alt="Sample PNG" width="120" />
          <figcaption style={style.caption}>PNG</figcaption>
        </figure>
        <figure style={style.figure}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg" alt="Sample SVG" width="120" />
          <figcaption style={style.caption}>SVG</figcaption>
        </figure>
      </div>
    </div>
  );
};

const style = {
  container: {
    padding: '30px',
    background: '#fff',
    borderRadius: '10px',
    fontFamily: 'monospace',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.7',
    maxWidth: '800px',
    margin: 'auto'
  },
  title: {
    textAlign: 'center',
    fontSize: '26px',
    marginBottom: '20px',
    color: '#003366',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px'
  },
  list: {
    marginBottom: '30px',
    paddingLeft: '20px'
  },
  subtitle: {
    color: '#1a237e',
    fontSize: '20px',
    marginBottom: '10px'
  },
  code: {
    background: '#f4f4f4',
    padding: '15px',
    borderRadius: '5px',
    overflowX: 'auto',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    marginBottom: '30px'
  },
  outputImages: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  figure: {
    textAlign: 'center'
  },
  caption: {
    marginTop: '5px',
    fontSize: '14px'
  }
};

export default ImageInsert;
