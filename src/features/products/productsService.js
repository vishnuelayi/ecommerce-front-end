import axios from "axios";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

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

const addToWhishList = async (productId) => {
  try {
    const response = await axios.put(
      `${base_url}product/addtowishlist/`,
      {prodId:productId},
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

const productsService = { getProducts, addToWhishList };
export default productsService;
