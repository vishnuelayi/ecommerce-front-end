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

//to fetch a single product
export const getAproduct = createAsyncThunk(
  "product/single-product",
  async (id, thunkAPI) => {
    try {
      const response = await productsService.getAProduct(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//add a product into wishlist
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

//add a product into cart
export const addToCart = createAsyncThunk(
  "product/addtocart",
  async (data, thunkAPI) => {
    try {
      const response = await productsService.addToCart(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//fetching cart items of a user
export const getCart = createAsyncThunk("product/getcart", async (thunkAPI) => {
  try {
    const response = await productsService.getCart();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

//deleting a product from cart
export const deleteOneProductCart = createAsyncThunk(
  "product/delete-procart",
  async (id, thunkAPI) => {
    try {
      const response = await productsService.deleteOneProd(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//for updating quantity of a product
export const updateQuantityCart = createAsyncThunk(
  "product/update-proquantity",
  async (cartDetails, thunkAPI) => {
    try {
      const response = await productsService.updateQuantityCart(cartDetails);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//for creating an order
export const createOrder = createAsyncThunk(
  "product/create-order",
  async (orderData, thunkAPI) => {
    try {
      const response = await productsService.createOrder(orderData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//for fetching orders of a particular user
export const getOrders = createAsyncThunk("myorders", async (thunkAPI) => {
  try {
    const response = await productsService.getOrders();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

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
        if (state.isSuccess) {
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
        state.message = "Added to wishlist";
      })
      .addCase(addToWhishList.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(getAproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getAproduct.rejected, (state, action) => {
        state.singleProduct = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartItem = action.payload;
        if (state.isSuccess) {
          toast.success("Added to cart");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cartItem = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProducts = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.cartProducts = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteOneProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOneProductCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Item Deleted");
        }
      })
      .addCase(deleteOneProductCart.rejected, (state, action) => {
        state.deletedProduct = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error("Something Went Wrong");
        }
      })
      .addCase(updateQuantityCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuantityCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedItem = action.payload;
      })
      .addCase(updateQuantityCart.rejected, (state, action) => {
        state.updatedItem = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error("Something Went Wrong");
        }
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdOrder = action.payload;
        if (state.isSuccess) {
          toast.success("Order Placed 🎉");
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.createdOrder = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        if (state.isError) {
          toast.error("Something Went Wrong");
        }
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.myOrders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.myOrders = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});

export default productsSlice.reducer;
