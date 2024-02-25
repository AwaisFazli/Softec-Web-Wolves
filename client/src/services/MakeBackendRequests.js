import axios from "axios"
import { getCookie } from "./CookieManager";

const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookie("userAccessToken")

        if (token){
            config.headers.Authorization = token
        }

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance