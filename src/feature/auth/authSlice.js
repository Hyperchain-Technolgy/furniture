import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginUser as loginUserApi, registerUser as registerUserApi } from "../../service/api-client";

const initialState = {
  user: JSON.parse(localStorage.getItem('userData')) || null,
  isLoading: false,
  error: null
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData) => {
    const resp = await registerUserApi('/api/user/register', userData);
    return resp;
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const resp = await loginUserApi('/api/user/login', userData);
      return resp;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload
    },
    logOut: (state) => {
      localStorage.removeItem('userData');
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
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
        state.user = action.payload;
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