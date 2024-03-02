import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//for fetching all the blogs
export const getBlogs = createAsyncThunk("blog/all-blogs", async (thunkAPI) => {
  try {
    const response = await blogService.getBlogs();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

//for fetching a particular blog
export const getABlog = createAsyncThunk(
  "blog/single-blog",
  async (id, thunkAPI) => {
    try {
      const response = await blogService.getAblog(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.blogs = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(getABlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.singleBlog = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});

export default blogSlice.reducer;
