import {baseUrl} from "./endpoints";
import axios from "axios";

//create axios gateway
const API_ENDPOINT = axios.create({
    baseURL: baseUrl,
});

export default API_ENDPOINT;
