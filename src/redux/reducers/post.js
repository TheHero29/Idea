import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPVOTE_POST,
  DOWNVOTE_POST
} from "../actions/post";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPVOTE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload
            ? { ...post, upvotes: post.upvotes + 1 }
            : post
        ),
      };
      case DOWNVOTE_POST:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === action.payload
              ? { ...post, upvotes: post.upvotes - 1 }
              : post
          ),
        };
    default:
      return state;
  }
};

export default postReducer;
