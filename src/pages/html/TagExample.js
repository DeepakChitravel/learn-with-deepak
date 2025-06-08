// src/components/TagExample.js
import React from 'react';

const TagExample = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>This is an &lt;h1&gt; tag</h1>
      
      <p><b>This text is bold using &lt;b&gt; tag</b></p>
      <p><i>This text is italic using &lt;i&gt; tag</i></p>
      <p><u>This text is underlined using &lt;u&gt; tag</u></p>
      
      <p><strong>This text is strong (bold) using &lt;strong&gt; tag</strong></p>
      <p><em>This text is emphasized (italic) using &lt;em&gt; tag</em></p>
      
      <p><mark>This text is highlighted using &lt;mark&gt; tag</mark></p>
      
      <p>This is normal text with a <sub>subscript</sub> and <sup>superscript</sup></p>
      
      <p>
        <marquee behavior="scroll" direction="left" scrollamount="5" style={{ background: '#eee', padding: '5px' }}>
          This text is moving using the &lt;marquee&gt; tag (deprecated)
        </marquee>
      </p>
      
      <p>This is <ins style={{ backgroundColor: '#cfc' }}>inserted text (underlined)</ins> and <del style={{ backgroundColor: '#fcc' }}>deleted text (strikethrough)</del></p>
      
      <p>
        Visit <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example.com</a> using the &lt;a&gt; tag
      </p>
    </div>
  );
};

export default TagExample;
