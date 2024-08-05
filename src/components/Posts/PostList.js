// File: PostList.js
import React from 'react';
import Post from './Post';
import { fetchPosts } from '../../redux/actions/post';
import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
function PostList() {
  console.log("postlist render")
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effect")
    console.log("About to dispatch fetchPosts")
    dispatch(fetchPosts());
    console.log('Dispatched fetchPosts');
  }, [dispatch]);
  const { posts, loading, error } = useSelector((state) => {
    return state.posts;  
    }
  );
  
  // const [posts,setPosts] = useState([]);
  if(loading) return <div>loading...</div>;

  return (
    <div className='post-list flex-col'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;