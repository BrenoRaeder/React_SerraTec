import axios from 'axios';
import { getLocal } from './localStorage'

export const api = axios.create({
    baseURL: "http://localhost:8080/trabalho1",
    headers:{
        Authorization: `Bearer ${getLocal('token')}`, 
    }
})