// File: Post.js
import React from 'react';

function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
}

export default Post;