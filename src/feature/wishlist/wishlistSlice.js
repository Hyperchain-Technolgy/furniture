import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: []
}

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
  }
})

export const { addProductToWishlist, removeProductFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 