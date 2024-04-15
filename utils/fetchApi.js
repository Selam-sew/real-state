import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "0766c32179msh156d85f7bc8cfbap1cd0c3jsn39f427dc0d9d",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error("error while fetching data:", error)
      throw error;
  }
};

