import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { registerUser as registerUserApi } from "../../service/api-client";
import { loginUser as loginUserApi } from "../../service/api-client";

const initialState = {
  user: [],
  isLoading: false,
  error: null
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData) => {
    const response = await registerUserApi('/api/user/register', userData);
    return response;
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credential) => {
    const response = await loginUserApi('/api/user/login', credential);
    return response;
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    }
  },
  extraReducers: (buiilder) => {
    buiilder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const cachedUser = localStorage.getItem('token');

        if (cachedUser) {
          state.user = cachedUser
          console.log(state.user);
        } else {
          state.user = action.payload;
          localStorage.setItem('token', action.payload)
          console.log(state.user);
        }

        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;