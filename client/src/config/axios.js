import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'https://quiet-beyond-42912.herokuapp.com/'
});

export default clientAxios;