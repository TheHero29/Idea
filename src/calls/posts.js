import {axiosInstance} from "./index";

export const getAllPosts = async () => {
  try {
      const response = await axiosInstance.get('api/posts/');
      return response;
  } catch (error) {
      console.log(error.response);
      return error.response;
  }
}

export const addPost = async(post) => {
  try{
    const response = await axiosInstance.post('api/posts/',post);
    return response;
  }
  catch(error){
    alert(error.response.data.message);
    console.log(error)
    return error.response;
  }
}

export const upvotePostBend = async (postId) => {
  try{
    const response = await axiosInstance.put(`api/posts/${postId}/upvote`);
    return response;
  }
  catch(error){
    console.log(error);
    return error.response;
  }
}

export const downvotePostBend = async (postId) => {
  try{
    const response = await axiosInstance.put(`api/posts/${postId}/downvote`);
    return response;
  }
  catch(error){
    console.log(error);
    return error.response;
  }
}

export const deletePost = async (postId) => {
  try{
    const response = await axiosInstance.delete(`api/posts/${postId}`);
    return response;
  }
  catch(error){
    console.log(error);
    return error.response;
  }
}
