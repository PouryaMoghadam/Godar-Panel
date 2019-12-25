import axios from 'axios';

const axiios = axios.create({
	baseURL: process.env.APIS_BASE_URL + ':' + process.env.PORT + process.env.APIS_PRE_FIX,
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
	proxy: {
		host: process.env.API_PROXY_URL,
		port: process.env.API_PROXY_PORT,
	}
});

export default axiios;