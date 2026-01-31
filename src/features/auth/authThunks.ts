import { authStart, authFailure, authSuccess } from "./authSlice";

import { apiRequest } from "../../components/lib/api";

export const loginUser = (email:string, password:string) => async (dispatch:any) => {
    try{
        dispatch(authStart());
        // backend sets HttpOnly cookie here
        await apiRequest("/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        })
        // fetch user after cookie is set
         const user = await apiRequest("/auth/me")
        dispatch(authSuccess(user));
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

export const loadUser = () => async(dispatch:any) => {
  try{
    dispatch(authStart());
    const user = await apiRequest("/auth/me");
    dispatch(authSuccess(user));  
  } catch {
  
  }
};
