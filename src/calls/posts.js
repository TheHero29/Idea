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