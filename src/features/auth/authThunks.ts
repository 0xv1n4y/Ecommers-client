import { authStart, authFailure, authSuccess } from "./authSlice";

import { apiRequest } from "../../components/lib/api";

export const loginUser = (email:string, password:string) => async (dispatch:any) => {
    try{
        dispatch(authStart());
        const response = await apiRequest("/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });
        dispatch(authSuccess(response));
         localStorage.setItem("token", response.token)
    }catch (error:any){
        dispatch(authFailure(error.message));
    }   
};

export const signupUser =
  (payload: any) => async (dispatch: any) => {
    try {
      dispatch(authStart())

      await apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
      })

      // No auto-login (email verification pending)
    } catch (err: any) {
      dispatch(authFailure(err.message))
    }
  }
