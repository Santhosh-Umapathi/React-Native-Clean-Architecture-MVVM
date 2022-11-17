import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {BASE_URL} from '@config';
import {HEADERS} from '../../../config/apiConfig';
import {HttpManager} from '../interfaces/HttpManager';

export class Http implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
      headers: HEADERS,
    });

    //Incase of modifying configs later
    this.http.interceptors.request.use(
      this.onRequestFulfilled,
      this.onRequestRejected,
    );
    this.http.interceptors.response.use(
      this.onResponseFulfilled,
      this.onResponseRejected,
    );
  }

  // Request Interceptors
  private onRequestFulfilled = (
    config: AxiosRequestConfig,
  ): AxiosRequestConfig => {
    return config;
  };

  private onRequestRejected = async (
    error: AxiosError,
  ): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  // Response Interceptors
  private onResponseFulfilled = (response: AxiosResponse) => {
    return response.data;
  };

  private onResponseRejected = async (
    error: AxiosError,
  ): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  //GET request implementation
  get = async (url: string): Promise<AxiosResponse> => {
    return this.http.get(url);
  };

  //PUT request implementation
  put = async (url: string, payload: object): Promise<AxiosResponse> => {
    const stringPayload = JSON.stringify(payload);
    return this.http.put(url, stringPayload);
  };

  //POST request implementation
  post = async (url: string, payload: object): Promise<AxiosResponse> => {
    const stringPayload = JSON.stringify(payload);

    return this.http.post(url, stringPayload);
  };

  //DELETE request implementation
  delete = async (url: string): Promise<AxiosResponse> => {
    return this.http.delete(url);
  };
}
