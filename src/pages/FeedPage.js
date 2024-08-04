import React from "react";
import { useState, useEffect } from "react";
import PostForm from "../components/Posts/PostForm";
import PostList from "../components/Posts/PostList";
import { getAllPosts } from "../calls/posts";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllPosts();
        setPosts(res.data);
        if(posts==null)
          setPosts([]);
      } catch (err) {
        alert("Check your Internet Connection");
      }
    };
  
    fetchData();
  }, []);
  

  function addPost(text) {
    setPosts([text, ...posts]);
  }
  return (
    <div className="feed-page w-full bg-muted flex justify-around">
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
      <div className="border-black p-4 text-wrap hidden lg:block">hell</div>
    </div>
  );
};

export default FeedPage;
