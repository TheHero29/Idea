// File: App.js
// import React, { useState } from 'react';
// import PostForm from './elements/Posts/PostForm';
// import PostList from './elements/Posts/PostList';
// import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeedPage from './pages/FeedPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './input.css';
function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {setPosts(data);console.log(data)});
  // }, [])

  // function addPost(text) {
  //   setPosts([text, ...posts]);
  // }
  
  console.log("rerendered");
  return (
    // <div className="App">
    //   <PostForm addPost={addPost} />
    //   <PostList posts={posts} />
    // </div>
    <Router>
      <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;