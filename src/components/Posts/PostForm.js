import React, { useState } from 'react';
function PostForm({addPost}) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [tags,setTags] = useState([]);
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
    <div className='flex justify-center items-center h-screen w-1/8'>
    <form className='hidden lg:flex lg:align-top lg:flex-col fixed lg:justify-start border bg-card text-card-foreground shadow-sm rounded-lg p-3' onSubmit={handleSubmit}>
      <input 
      className='m-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm'
      type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
      />
      <textarea
      className='m-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm'
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What's your idea?"
      />
      <button className='text-wrap bg-black text-white rounded-xl p-2 max-w-20 m-3' type="submit">Post</button>
    </form>
    </div>
  );
}

export default PostForm;