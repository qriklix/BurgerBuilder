import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://qriklix-my-burger.firebaseio.com/',
});

export default instance;