import axios from 'axios';

const api = axios.create({
    baseURL: "https://ain-api.herokuapp.com/api/v1/",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
});

export default api;