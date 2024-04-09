import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "11e232035dmsh733fa745dd4f5cap1eac98jsn20bbf7f1727e",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error("error while fetching data:", error)
      throw error;
  }
};

