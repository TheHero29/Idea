// File: PostForm.js
import React, { useState } from 'react';
// import '../input.css'
function PostForm({addPost}) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addPost({
      "title":title,
      "body":text
    });
    setText('');
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
      />
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