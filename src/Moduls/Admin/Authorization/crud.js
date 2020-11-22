import { axios } from 'axios';

export const authorizationAPI = (data) => {
    axios.get('/login', data)
}