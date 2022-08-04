import axios from "axios";

const apiUrl = process.env.API_URL;

export default {
    get(uri) {
        return axios.get(apiUrl + uri);
    },
    post(uri, data) {
        return axios.post(apiUrl + uri, data);
    },
    put(uri, data) {
        return axios.put(apiUrl + uri, data);
    },
    delete(uri) {
        return axios.delete(apiUrl + uri);
    },
}