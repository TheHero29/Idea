// File: Post.js
import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { upvotePost,downvotePost } from '../../redux/actions/post';
import { upvotePostBend, downvotePostBend } from '../../calls/posts';
import { cancelUpvotePost, cancelDownvotePost } from '../../redux/actions/post';
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const postId = post._id;
  const user = useSelector(state => state.user.user);
  // console.log(user);
  const userId = user?user._id:null;
  // console.log(userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const upvote = async () =>{
    if(!user)
    { 
      alert("Please login to upvote");
      navigate("/login");
      return;
    }
    if(post.downvotesArray.includes(userId))
    {
      post.downvotesArray.splice(post.downvotesArray.indexOf(userId),1);
      dispatch(cancelDownvotePost(postId));
    }
    if(post.upvotesArray.includes(userId))
      {    
        post.upvotesArray.splice(post.upvotesArray.indexOf(userId),1);
        dispatch(cancelUpvotePost(postId))
      }
      else
      {
        post.upvotesArray.push(userId);
        dispatch(upvotePost(postId));
      }
    upvotePostBend(postId);
  }
  const downvote = async () =>{
    if(!user)
    {
      alert("Please login to downvote");
      navigate("/login");
      return;
    }
    if(post.upvotesArray.includes(userId))
    {
      post.upvotesArray.splice(post.upvotesArray.indexOf(userId),1);
      dispatch(cancelUpvotePost(postId))
    }
    if(post.downvotesArray.includes(userId))
      {    
        post.downvotesArray.splice(post.downvotesArray.indexOf(userId),1);
        dispatch(cancelDownvotePost(postId))
      }
      else
      {
        post.downvotesArray.push(userId);
        dispatch(downvotePost(postId));
      }
    downvotePostBend(postId);
  }
  // console.log(post);
  return (
    <Card className="w-[80vw] md:max-w-[30vw] p-6 grid gap-6 m-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="font-medium">@{post.author}</div>
      </div>
      <div className="font-semibold">{post.title}</div>
      <div className="text-accent-foreground">{post.content}</div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={`hover:bg-transparent`}
          onClick={upvote}
        >{post.upvotesArray.includes(userId)?<ThumbsUpIconSolid className="w-5 h-5" />:<ThumbsUpIcon className="w-5 h-5" />}
        </Button>
        <span>{post.upvotes - post.downvotes}</span>
        <Button
          variant="ghost"
          size="icon"
          className={post.downvotesArray.includes(userId)?``:`hover:bg-transparent`}
          onClick={downvote}
        >{post.downvotesArray.includes(userId)?<ThumbsDownIconSolid className="w-5 h-5" />: <ThumbsDownIcon className="w-5 h-5"/>}
        </Button>
      </div>
    </Card>
  );
}

// function CurrencyIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="8" />
//       <line x1="3" x2="6" y1="3" y2="6" />
//       <line x1="21" x2="18" y1="3" y2="6" />
//       <line x1="3" x2="6" y1="21" y2="18" />
//       <line x1="21" x2="18" y1="21" y2="18" />
//     </svg>
//   );
// }
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

function ThumbsDownIconSolid(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="grey" // Set the fill to black for a solid icon
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" fill="black" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" fill="black" />
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

function ThumbsUpIconSolid(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
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
