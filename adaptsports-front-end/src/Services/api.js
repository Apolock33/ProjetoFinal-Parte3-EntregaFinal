import axios from 'axios'

const api = axios.create({
    baseURL: 'https://adaptsports.herokuapp.com/'
})
export default api;