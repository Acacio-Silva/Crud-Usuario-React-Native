import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-usuarios-spring.herokuapp.com/'
})

export default api;