import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "product/all-products",
  async (thunkAPI) => {
    try {
      const response = await productsService.getProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addToWhishList = createAsyncThunk(
  "product/addtowishlist",
  async (prodId, thunkAPI) => {
    try {
      const response = await productsService.addToWhishList(prodId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(addToWhishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWhishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if(state.isSuccess)
        {
          toast.success("Added to wishlist", {
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
        state.addToWishlist = action.payload;
        state.message= "Added to wishlist"
        
      })
      .addCase(addToWhishList.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        
      });
  },
});

export default productsSlice.reducer;
