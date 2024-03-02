import {instance} from "./axiosInstance";

export async function signUpValidate(info) {
   const response = await instance.post(`/userSignup`, {info},{withCredentials: true});
   return response
}
