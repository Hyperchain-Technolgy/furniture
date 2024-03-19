import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { registerUser as registerUserApi } from "../../service/api-client";
import { loginUser as loginUserApi } from "../../service/api-client";

const initialState = {
  user: null,
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
    console.log(credential);
    const response = await loginUserApi('/api/user/login', credential);
    console.log(response);
    return response;
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
})

export default authSlice.reducer;