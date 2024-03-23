import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUser as getUserApi } from "../../service/api-client"


const initialState = {
  loading: false,
  userInfo: null,
  error: null
}

export const fetchUserInfo = createAsyncThunk(
  'auth/fetchUserInfo ',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const resp = await getUserApi(`/api/user/${id}`, token)
      return resp;
    } catch (err) {
      return rejectWithValue(err.message.data)
    }
  }
)

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default userInfoSlice.reducer;