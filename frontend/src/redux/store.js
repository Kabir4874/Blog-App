import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogsApi";
import authApi from "./features/auth/authApi";

const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware, authApi.middleware),
});
export default store;
