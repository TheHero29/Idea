// File: Post.js
import React from 'react';
// import './Post.css';
function Post({ post }) {
  return (
    <div className='post-card'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
}

export default Post;