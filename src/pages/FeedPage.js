import React from "react";
import { fetchPosts } from "../redux/actions/post";
import { useState, useEffect } from "react";
import PostForm from "../components/Posts/PostForm";
import PostList from "../components/Posts/PostList";
import { getAllPosts } from "../calls/posts";
import { useDispatch, useSelector } from "react-redux";

const FeedPage = () => {
  // const [posts, setPosts] = useState([]);
  // const posts = useSelector((state)=>{return state.posts})
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getAllPosts();
  //       setPosts(res.data);
  //       if(posts==null)
  //         setPosts([]);
  //     } catch (err) {
  //       alert("Check your Internet Connection");
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  // function addPost(post) {
  //   dispatch(addPost(post));
  //   // setPosts([text, ...posts]);
  // }
  return (
    <div className="feed-page w-full bg-muted flex justify-around">
      <PostForm />
      <PostList />
      <div className="border-black p-4 text-wrap hidden lg:block">hello</div>
    </div>
  );
};

export default FeedPage;
