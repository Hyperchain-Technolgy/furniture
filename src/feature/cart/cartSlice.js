import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAll } from "../../service/api-client";

const initialState = {
  loading: false,
  cartProducts: null,
  error: null
}

export const getCartProducts = createAsyncThunk(
  'cart/getCartProducts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      const response = await getAll('/api/user/cart', user.token);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(id => id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProducts = action.payload
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  }
})

export const { addProductToWishlist, removeProductFromWishlist } = cartSlice.actions

export default cartSlice.reducer;
