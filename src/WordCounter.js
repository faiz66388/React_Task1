import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(/\s+/).filter(word => word !== ''); // Filter out empty strings
    return words.length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        placeholder="Enter text here..."
        rows="4"
        value={text}
        onKeyUp={handleTextChange}
      ></textarea>
      <p>Word count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
