import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types (we’ll use later, safe to add now)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch