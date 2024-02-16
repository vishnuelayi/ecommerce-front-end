import axios from "axios";
import { base_url } from "../../utils/base-url";


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

const authService = {registerUser, loginUser}
export default authService;