import axios from 'axios';

const KEY = 'AIzaSyDomjGe4ADQni8MnBAEY_Gyq_36CjJ2yJw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});