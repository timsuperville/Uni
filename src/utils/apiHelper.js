const axios = require("axios");

const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("API request failed");
  }
};

module.exports = { fetchFromApi };
