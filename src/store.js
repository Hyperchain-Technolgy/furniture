import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import authReducer from "./feature/auth/authSlice";
import wishlistReducer from './feature/wishlist/wishlistSlice'
import cartReducer from "./feature/cart/cartSlice";
import userInfoReducer from "./feature/auth/userInfoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
  }
})

export default store;