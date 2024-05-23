import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import authReducer from "./feature/auth/authSlice";
import wishlistReducer from './feature/wishlist/wishlistSlice'
import cartReducer from "./feature/cart/cartSlice";
import userInfoReducer from "./feature/auth/userInfoSlice";
import SpecificProductReducer from "./feature/specificProduct/SpecificProduct";
import adminProductReducer from "./feature/adminSlices/AdminProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
    products: productReducer,
    specificProduct: SpecificProductReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    adminProduct: adminProductReducer
  }
})

export default store;