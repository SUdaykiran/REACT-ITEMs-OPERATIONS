// App.js
import React, { useState } from 'react';
import './Cs.css';

function Code() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [result, setResult] = useState('');

  const compileCode = () => {
    const iframeContent = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setResult(iframeContent);
  };

  return (
    <div className="App">
      <header>
        <h1>HTML, CSS, and JavaScript Compiler</h1>
      </header>
      <main>
        <section className="editor">
          <h2>Editor</h2>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="Enter HTML code here"
          ></textarea>
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            placeholder="Enter CSS code here"
          ></textarea>
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            placeholder="Enter JavaScript code here"
          ></textarea>
          <button onClick={compileCode}>Compile</button>
        </section>
        <section className="result">
          <h2>Result</h2>
          <iframe title="Result" srcDoc={result} />
        </section>
      </main>
    </div>
  );
}

export default Code;

