import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "5f5d3bb600846b5a3ce1455b";

export const getPostsByTag = async (searchText) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tag/${searchText}/post?limit=25`,
      {
        headers: { "app-id": APP_ID },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
