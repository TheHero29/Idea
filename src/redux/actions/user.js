import { GetCurrentUser } from "../../calls/users";

export const SET_USER = 'SET_USER';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await GetCurrentUser(); 
      // console.log(response);
      dispatch(setUser(response.data));
    } catch (error) {
      // dispatch(fetchUserFailure(error.message));
      console.log(error);
    }
  };
}