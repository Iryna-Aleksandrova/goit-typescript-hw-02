import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const API_KEY = "2AYi26mnpB9wsR1IPhAFsrq8W3t4RDCoqceo726DFJg";

axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.baseURL = BASE_URL;

export const fetchData = async <T>(
  query: string,
  nextPage: number
): Promise<T> => {
  const response = await axios.get("search/photos", {
    params: {
      query: query,
      per_page: "12",
      orientation: "portrait",
      page: nextPage,
    },
  });
  return response.data;
};
