import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;