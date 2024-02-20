import axios from "axios";
import { base_url } from "../../utils/base-url";
import {Token} from "../../utils/tokenConfig"


const token = Token();


const getProducts = async () => {
   try{
    const response = await axios.get(`${base_url}product/`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    console.log("products: " + response.data)
    return response.data;
    
   }
   catch(error)
   {
throw new Error(error)
   }
  };



const productsService = {getProducts}
export default productsService;