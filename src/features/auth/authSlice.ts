import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  user: any
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
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
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    authFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { authStart, authSuccess, authFailure, logout } =
  authSlice.actions

export default authSlice.reducer
