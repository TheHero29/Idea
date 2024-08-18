import { GetCurrentUser } from "../../calls/users";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addPost } from "../../calls/posts";
function PostForm() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await GetCurrentUser();
    console.log(user);
    if (!user.success) {
      alert("You need to be logged in");
      navigate("/login");
    }
    const post = {
      title: title,
      content: text,
      author: user.data.user_name,
    };
    console.log(post);
    addPost(post);
    
    setText("");
    setTitle("");
  }

  return (
    // <div className="justify-center items-center h-screen w-1/8 hidden lg:flex lg:align-top lg:flex-col">
      <form
        className={`
        flex align-top flex-col w-[80vw] md:max-w-[30vw] lg:justify-start
         border bg-card text-card-foreground shadow-sm rounded-lg p-3 m-4`}
        onSubmit={handleSubmit}
      >
        <input
          className="m-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="m-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's your idea?"
        />
        <button
          className="text-wrap bg-black text-white rounded-xl p-2 max-w-20 m-3"
          type="submit"
        >
          Post
        </button>
      </form>
    // </div>
  );
}

export default PostForm;
