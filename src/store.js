import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import authReducer from "./feature/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // products: productReducer,
  }
})

export default store;