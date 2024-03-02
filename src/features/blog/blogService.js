import axios from "axios";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

const getBlogs = async () => {
  try {
    const response = await axios.get(`${base_url}blog/`, {
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

const getAblog = async(id) => {
    try{
        const response = await axios.get(`${base_url}blog/${id}`)
        if(response)
        {
            return response.data;
        }
    }
    catch(error)
    {
        throw new Error(error)
    }
}

const blogService = { getBlogs, getAblog };
export default blogService;
