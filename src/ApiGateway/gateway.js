import {baseUrl} from "./endpoints";
import axios from "axios";

const API_ENDPOINT = axios.create({
    baseURL: baseUrl,
});

export default API_ENDPOINT;
