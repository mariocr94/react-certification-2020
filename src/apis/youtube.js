import axios from 'axios';
const KEY = 'AIzaSyBs1t9KiLbciuopk8CWMVJMimlGT7OgcxU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})