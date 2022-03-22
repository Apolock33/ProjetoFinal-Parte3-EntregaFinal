import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sheltered-reef-50631.herokuapp.com/'
})
export default api;