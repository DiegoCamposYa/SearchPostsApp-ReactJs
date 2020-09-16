import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "5f5d3bb600846b5a3ce1455b";

export const getPostsByTag = async (searchText, numberPage = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tag/${searchText}/post?page=${numberPage}&limit=50`,
      {
        headers: { "app-id": APP_ID },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
