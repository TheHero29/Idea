import React from 'react'
import { useState, useEffect } from 'react';
import PostForm from '../components/Posts/PostForm';
import PostList from '../components/Posts/PostList';
const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {setPosts(data);console.log(data)});
  }, [])

  function addPost(text) {
    setPosts([text, ...posts]);
  }
  return (
    <div>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
    </div>
  )
}

export default FeedPage;
