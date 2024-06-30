// File: PostList.js
import React from 'react';
import Post from './Post';

function PostList() {
  
  return (
    <ul>
      {posts.map((post, index) => (
        <Post key={index} text={post} />
      ))}
    </ul>
  );
}

export default PostList;