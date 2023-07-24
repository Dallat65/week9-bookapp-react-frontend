import axios from "axios";

const BASE_URL = "http://localhost:4777"

const request = axios.create({
    baseURL: BASE_URL
})
export default request;