import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  user: any | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true
      state.error = null
    },
    authSuccess(state, action) {
      state.loading = false
      state.user = action.payload.user
      state.isAuthenticated = true
    },
    authFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null

      state.isAuthenticated = false
    },
  },
})

export const { authStart, authSuccess, authFailure, logout } =
  authSlice.actions

export default authSlice.reducer
