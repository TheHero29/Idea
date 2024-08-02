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
    <div className='flex items-center content-center '>
    <form className='hidden md:flex md:align-top md:flex-col' onSubmit={handleSubmit}>
      <input 
      className='border-black m-3 p-3 rounded-lg'
      type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
      />
      <input
      className='border-black m-3 p-3 rounded-lg'
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What's your idea?"
      />
      <button className='text-wrap bg-black text-white rounded-xl p-2 max-w-20' type="submit">Post</button>
    </form>
    </div>
  );
}

export default PostForm;