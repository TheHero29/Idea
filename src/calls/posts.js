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