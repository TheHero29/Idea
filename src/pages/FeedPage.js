import React from "react";
import PostForm from "../components/Posts/PostForm";
import PostList from "../components/Posts/PostList";
import Header from "../components/Header";


const FeedPage = () => {
  return (
    <>
    <Header />
    <div className="feed-page w-full bg-muted flex justify-around">
      <PostForm />
      <PostList />
      <div className="border-black p-4 text-wrap hidden lg:block">hello</div>
    </div>
    </>
  );
};

export default FeedPage;
