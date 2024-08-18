import { getAllPosts } from '../../calls/posts';

// Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const CANCEL_UPVOTE_POST = 'CANCEL_UPVOTE_POST';
export const CANCEL_DOWNVOTE_POST = 'CANCEL_DOWNVOTE_POST';


// Action Creators
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

// Async Action Creator (Thunk)
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await getAllPosts(); 
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

//upvote function

export const upvotePost = (postId) => {
  return{
    type:UPVOTE_POST,
    payload:postId
  }
}

export const downvotePost = (postId) => {
  return{
    type:DOWNVOTE_POST,
    payload:postId
  }
}

export const cancelUpvotePost = (postId) => {
  return{
    type:CANCEL_UPVOTE_POST,
    payload:postId
  }
}

export const cancelDownvotePost = (postId) => {
  return{
    type:CANCEL_DOWNVOTE_POST,
    payload:postId
  }
}