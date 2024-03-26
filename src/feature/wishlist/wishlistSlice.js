import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addToWishList as addToWishListAPI, removeFromWishList as removeFromWishListApi } from "../../service/api-client";

const initialState = {
  loading: false,
  products: JSON.parse(localStorage.getItem('wishlist')) || [],
  error: null
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

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async (prodId, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      const response = await removeFromWishListApi('/api/product/wishlist', prodId, user.token);
      localStorage.setItem('wishlist', JSON.stringify(response.wishlist));
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.products));
    },
    removeProductFromWishlist: (state, action) => {
      state.products = state.products.filter(id => id !== action.payload);
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
        state.error = action.error.message;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export const { addProductToWishlist, removeProductFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 