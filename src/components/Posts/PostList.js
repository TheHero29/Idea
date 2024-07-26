// File: PostList.js
import React from 'react';
import Post from './Post';
// import { useState, useEffect } from 'react';
function PostList({ posts}) {
  // let [posts,setPosts] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {setPosts(data);console.log(data)});
  // }, [])
  return (
    <div className='post-list flex-col'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;