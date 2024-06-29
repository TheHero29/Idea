// File: PostForm.js
import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addPost(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What's your idea?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;