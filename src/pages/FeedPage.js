import React from "react";
import PostForm from "../components/Posts/PostForm";
import PostList from "../components/Posts/PostList";
import Header from "../components/Header";
// import { useSelector } from "react-redux";

const FeedPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);
  // const user = useSelector((state) => state.user);
  // if(user!==null)
  // console.log(user);
  return (
    
    <>
      <Header />
      <div className="feed-page w-full bg-muted flex justify-center mt-[5rem]">
        <div className="flex-col">
        <PostForm />
        <PostList />
        </div>
        {/* <div className="border-black p-4 text-wrap hidden lg:block">hello</div> */}
      </div>
    </>
  );
};

export default FeedPage;
