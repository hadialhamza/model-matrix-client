import axios from "axios";
import useAuth from "./useAuth";

// create instance of axios call
const axiosInstance = axios.create({
  baseURL: "https://modelmatrixapi.vercel.app",
});

// custom hook for call axios with authorization header for secure apis
const useSecureAxios = () => {
  // import user information from context
  const { user } = useAuth();

  // add authorization header to axios instance
  axiosInstance.interceptors.request.use((config) => {
    // add authorization token to header
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return axiosInstance;
};

export default useSecureAxios;
