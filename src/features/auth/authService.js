import axios from "axios";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token()


const loginUser = async (data) => {
    try {
      const response = await axios.post(`${base_url}user/login`, data);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };


const registerUser = async(data) =>{
    try{
const response = await axios.post(`${base_url}user/register`, data)
return response.data;
    }
    catch(error)
    {
        throw new Error(error)
    }
}

const getWishList = async() => {
  try{
const response = await axios.get(`${base_url}user/wishlist/`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
return response.data;
  }
  catch(error){
throw new Error(error)
  }
}

const authService = {registerUser, loginUser, getWishList}
export default authService;