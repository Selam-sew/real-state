import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "72b712729fmsh1bb0188c0bdb7cep105118jsn1df4f06748de",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error("error while fetching data:", error)
      throw error;
  }
};

