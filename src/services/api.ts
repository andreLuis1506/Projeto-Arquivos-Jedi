import axios from "axios";
import type {AxiosInstance} from "axios";


const api:AxiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

export default api