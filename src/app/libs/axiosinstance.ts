import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003'
    // baseURL: 'https://organic-shop-back.onrender.com/'
});
