// File: App.js
import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(text) {
    setPosts([text, ...posts]);
  }
  console.log("rerendered");
  return (
    <div className="App">
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;