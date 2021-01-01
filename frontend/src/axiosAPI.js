import axios from "axios";
import {axiosURL} from './axiosURL';

const axiosAPI = axios.create({
   baseURL: axiosURL,
});

export default axiosAPI;