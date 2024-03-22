import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addToWishList as addToWishListAPI } from "../../service/api-client";

const initialState = {
  products: []
}


export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (prodId, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      const response = await addToWishListAPI('/api/product/wishlist', prodId, user.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.products.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})

export const { addProductToWishlist, removeProductFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 