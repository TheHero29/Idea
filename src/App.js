// File: App.js
import React, { useState } from 'react';
import PostForm from './components/Posts/PostForm';
import PostList from './components/Posts/PostList';
import { useEffect } from 'react';
// import './input.css';
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {setPosts(data);console.log(data)});
  }, [])
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