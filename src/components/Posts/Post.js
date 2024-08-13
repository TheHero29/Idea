// File: Post.js
import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { upvotePost,downvotePost } from '../../redux/actions/post';
function Post({ post }) {
  const postId = post._id;
  const dispatch = useDispatch();
  const upvote = () =>{
    dispatch(upvotePost(postId));
  }
  const downvote = () =>{
    dispatch(downvotePost(postId));
  }
  return (
    <Card className="w-[80vw] md:max-w-[30vw] p-6 grid gap-6 m-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="font-medium">{post.author}</div>
        <div className="ml-auto flex items-center gap-2 text-muted-foreground">
          <CurrencyIcon className="w-5 h-5" />
          <span>100</span>
        </div>
      </div>
      <div className="font-semibold">{post.title}</div>
      <div className="text-accent-foreground">{post.content}</div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent"
          onClick={upvote}
        >
          <ThumbsUpIcon className="w-5 h-5" />
          <span className="sr-only">Upvote</span>
        </Button>
        <span>{post.upvotes - post.downvotes}</span>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent"
          onClick={downvote}
        >
          <ThumbsDownIcon className="w-5 h-5" />
          <span className="sr-only">Downvote</span>
        </Button>
      </div>
    </Card>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}
function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
export default Post;

//older version
// import React from 'react';

// function Post({ post }) {
//   return (
//     <div className='post-card'>
//       <h3>{post.title}</h3>
//       <p>{post.body}</p>
//       <img src={post.image} alt={post.title} />
//     </div>
//   );
// }
// export default Post;
