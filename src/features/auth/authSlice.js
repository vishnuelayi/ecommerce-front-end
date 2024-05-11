import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

const initialState = {
  signedUpUser:null,
  loginedUser: null,
  updatedUser:null,
  wishlist:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//for registering a user
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const response = await authService.registerUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//for login as a user
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await authService.loginUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//update a user details
export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const response = await authService.updateUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// for fetching user wishlist
export const getwishlist = createAsyncThunk(
  "user/get-wishlist",
  async (thunkAPI) => {
    try {
      const response = await authService.getWishList();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signedUpUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Signed Up Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signedUpUser = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error("Something went wrong", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loginedUser = action.payload;
        if (state.isSuccess) {
          toast.success("Login Successfull", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getwishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getwishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getwishlist.rejected, (state, action) => {
        state.wishlist = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedUser = action.payload;
        if (state.isSuccess) {
          toast.success("Profile Updated");
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updatedUser = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error("Something went wrong");
        }
      });
  },
});

export default authSlice.reducer;
