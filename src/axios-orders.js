import axios from 'axios';

const instance = axios.create({
	baseURL: '/resumeData.json'
});

export default instance;
