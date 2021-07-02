import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'https://git.heroku.com/fathomless-garden-81944.git'
});

export default clientAxios;