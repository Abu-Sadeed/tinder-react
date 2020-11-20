import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-cloneb.herokuapp.com'
})

export default instance;