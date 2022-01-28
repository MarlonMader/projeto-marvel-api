import axios from 'axios';
import md5 from 'md5';

const publicKey = '3924b3488a03917acf02b383fbdaca78';
const privateKey = '77949861fddfe4c46e0c8dd4436ceb52dfb17b17';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params:{
        ts,
        apikey: publicKey,
        hash,
    }
})

export default api;