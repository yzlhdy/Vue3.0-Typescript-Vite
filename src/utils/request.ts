import { IResponseData } from '../types/response';
import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
const showStatus = (status: number): string => {
	let message: string;
	switch (status) {
		case 200:
			message = 'OK';
			break;
		case 401:
			message = 'Unauthorized';
			break;
		case 403:
			message = 'Forbidden';
		case 404:
			message = 'Not Found';
			break;
		case 500:
			message = 'Internal Server Error';
			break;
		default:
			message = 'Unknown Error';

	}
	return message;
}

const service: Axios = axios.create({
	baseURL: import.meta.env.BASE_URL,
	timeout: 5000,
	withCredentials: true
});


// request interceptor
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// Do something before request is sent
		const token = localStorage.getItem('token');
		if (token) {
			config.headers = {
				Authorization: `Bearer ${token}`,
			}
		}

		return config;
	},
	(error: AxiosError) => {
		// Do something with request error
		return Promise.reject(error);
	}
);
// response interceptor
service.interceptors.response.use(
	(response: AxiosResponse) => {
		// Do something with response data
		const result: any = response.data;
		return Promise.resolve(result);
	}
	,
	(error: AxiosError) => {
		// Do something with response error
		if (error.response) {
			const status = error.response.status;

			const message = showStatus(status);
			return Promise.reject(message);
		}
		return Promise.reject(error);
	}
);

// request
export default {
	get<T>(url: string, params?: object): Promise<IResponseData<T>> {
		return service.get(url, { params });
	},
	post<T>(url: string, data?: object): Promise<IResponseData<T>> {
		return service.post(url, data);
	},
	put<T>(url: string, data?: object): Promise<IResponseData<T>> {
		return service.put(url, data);
	}

};



