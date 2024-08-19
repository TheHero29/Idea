import {axiosInstance} from "./index";

export const RegisterUser = async (user) => {
    try {
        const response = await axiosInstance.post('api/users/register', user);
        return response;
    } catch (error) {
        console.log(error.response);
        return error.response;
    }
}

export const LoginUser = async (user) => {
    try{
        const response = await axiosInstance.post('api/users/login',user);
        return response.data;
    }
    catch(error){
        console.log(error.response);
        return error.response;
    }
}

export const GetCurrentUser = async () => {
    try{
        const response = await axiosInstance.get('api/users/get-current-user');
        return response.data;
    }
    catch(error){
        console.log(error)
        return error.response.data;
    }
}

