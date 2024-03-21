import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addToWishList as addToWishListAPI } from "../../service/api-client";

const initialState = {
  products: []
}


export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (product, token) => {
    const response = await addToWishListAPI('/api/products/wishlist', product, token);
    return response.data;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.products.push(action.payload)
    },
    removeProductFromWishlist: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload.id)
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})

export const { addProductToWishlist, removeProductFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 