import axios, {AxiosRequestConfig} from "axios";

/**
 * This module provides a light wrapper over low-level HTTP requests. We export some data types representing HTTP
 * requests and some functions to execute them.
 */

export type HttpHeaders = { [key: string]: string };
export type HttpParams = { [key: string]: any };

export type HttpRequest = {
    url: string;
    queryParams?: HttpParams;
    headers?: HttpHeaders;
}

export type HttpPostRequest = HttpRequest & {
    requestBody?: any;
}

const get = <T>(request: HttpRequest): Promise<T> => {
    const config: AxiosRequestConfig = {
        params: request.queryParams || {},
        headers: request.headers || {}
    };
    const xhr = axios.get(request.url, config);
    return xhr.then(r => r.data);
}

const post = <T>(request: HttpPostRequest): Promise<T> => {
    const config: AxiosRequestConfig = {
        params: request.queryParams || {},
        headers: request.headers || {}
    };
    console.log('here')
    console.log(request)
    const xhr = axios.post(request.url, request.requestBody, config);
    console.log('wtf')

    return xhr.then(r => r.data);
}

export {get};
export {post};
