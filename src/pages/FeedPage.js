import React from 'react'
import { useState, useEffect } from 'react';
import PostForm from '../components/Posts/PostForm';
import PostList from '../components/Posts/PostList';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {setPosts(data);})
      .catch(err =>{alert("Check Internet Connection")});
  }, [])

  function addPost(text) {
    setPosts([text, ...posts]);
  }
  return (
    <div className='feed-page w-full bg-back-ground flex justify-around'>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
        <div className='border-black p-4 text-wrap'>hell</div>
    </div>
  )
}

export default FeedPage;
