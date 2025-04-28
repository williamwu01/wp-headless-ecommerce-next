import axios from "axios"; // Ensure this import is present
import { API_PATHS } from "../../constants"; // Adjust the import path as necessary

//fetching header and footer data
export const navfetchAPI = async (path) => {
  const url = `${API_PATHS.BASE_URL}/${path}`;

  try {
    const res = await axios.get(url);

    if (!res?.data?.data) {
      throw new Error("Unexpected API response structure");
    }

    return res.data.data;
  } catch (error) {
    console.error("ERROR fetching data from API:", error.message);
    throw error;
  }
};

//fetching page data
export const fetchAPI = async (path: string) => {
  const url = `${API_PATHS.BASE_URL}/${path}`;

  try {
    const res = await axios.get(url);

    // Ensure the response data exists
    if (!res?.data) {
      throw new Error("No data in response");
    }

    return res.data; // Adjust based on your API's response structure
  } catch (error) {
    console.error("ERROR fetching data from API:", error);
    throw error;
  }
};

export const fetchProtectedAPI = async (path: string) => {
  const url = `${API_PATHS.BASE_URL}/${path}?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`;

  console.log(url)
  try {
    const res = await axios.get(url);

    // Ensure the response data exists
    if (!res?.data) {
      throw new Error("No data in response");
    }

    return res.data; // Adjust based on your API's response structure
  } catch (error) {
    console.error("ERROR fetching data from API:", error);
    throw error;
  }
};
