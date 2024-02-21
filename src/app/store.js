import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import productReducer from "../features/products/productsSlice"
import blogReducer from "../features/blog/blogSlice"


export const store = configureStore({
  reducer: {
    auth:authReducer,
    products:productReducer,
    blogs:blogReducer
  },
});
