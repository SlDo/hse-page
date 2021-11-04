import axios, { AxiosResponse } from 'axios';
import { config } from './config';
import { errorHandler } from './errorHandler';

interface IRequest {
    url: string,
    baseURL?: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: Record<string, any>,
    params?: Record<string, any>,
    headers?: {
        authorization?: boolean
    },
    retryOnError?: boolean
}

interface HTTPHeaders {
    authorization?: string
}

export const request = <T>({
  url = '/', method = 'GET', data, params, headers, retryOnError = true,
}: IRequest): Promise<AxiosResponse<T>> => {
  const headersObject: HTTPHeaders = {};

  if (headers?.authorization && config.authToken) {
    headersObject.authorization = `Token ${config.authToken}`;
  }

  return axios({
    url: `${config.baseURL ?? ''}${url}`,
    headers: headersObject,
    method,
    data,
    params,
  }).catch((error) => {
    errorHandler(error, {
      url, method, data, params, headers, retryOnError,
    });

    return error;
  });
};
