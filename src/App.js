import React, { useState } from 'react';
import './App.css';

function WordCounter() {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div class="div1">
    <div class="d1" >
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Enter text here..."
        rows="8"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p class="p1">
        Word count: {text ? countWords() : 0}
      </p>
    </div>
    </div>
  );
}

export default WordCounter;
