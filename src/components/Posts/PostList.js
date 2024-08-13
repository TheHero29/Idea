// File: PostList.js
import React from 'react';
import Post from './Post';
import { fetchPosts } from '../../redux/actions/post';
import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { posts, loading, error } = useSelector((state) => {
    return state.posts;  
    }
  );
  
  if(loading) return <div>loading...</div>;
  return (
    <div className='post-list flex-col'>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostList;