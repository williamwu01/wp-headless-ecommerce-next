import axios from "axios"; // Ensure this import is present

export const fetchAPI = async (path) => {
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/${path}`;

  console.log("Fetching API URL:", url); // Debugging: Log the full URL

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