import axios from "axios";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

//get all products
const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//get a single product
const getAProduct = async (id) => {
  try {
    const response = await axios.get(`${base_url}product/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};

//add to wishlist
const addToWhishList = async (productId) => {
  try {
    const response = await axios.put(
      `${base_url}product/addtowishlist/`,
      { prodId: productId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//add to cart
const addToCart = async (data) => {
  try {
    const response = await axios.post(`${base_url}user/cart/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//fetch cart
const getCart = async () => {
  try {
    const response = await axios.get(
      `${base_url}user/cart`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const productsService = { getProducts, addToWhishList, getAProduct, addToCart, getCart };
export default productsService;
