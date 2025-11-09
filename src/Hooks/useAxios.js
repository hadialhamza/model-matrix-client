import axios from "axios";

// axios instance for declare base url
const axiosInstance = axios.create({
  baseURL: "https://modelmatrixapi.vercel.app",
});

// custom hook for call axios instance
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
