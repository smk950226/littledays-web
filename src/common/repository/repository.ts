import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

import Env from '../constant/env';
import ExceptionInterceptor from '../exception/interceptor/exception_interceptor';
import I18nInterceptor from '../i18n/interceptor/i18n_interceptor';

const repository = axios.create({
    baseURL: import.meta.env[Env.api.uri],
    timeout: 1000 * 30,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        [import.meta.env[Env.api.header.version]]: import.meta.env[
            Env.api.version
        ],
        [import.meta.env[Env.api.header.key]]: import.meta.env[Env.api.key],
        [import.meta.env[Env.api.header.platform]]: 'web',
    },
    withCredentials: true,
});

repository.interceptors.request.use(I18nInterceptor);
repository.interceptors.response.use(undefined, ExceptionInterceptor);

export async function get<R>(
    url: string,
    config?: AxiosRequestConfig,
): Promise<R> {
    const { data } = await repository.get<R, AxiosResponse<R>>(url, config);
    return data;
}

export async function post<R, P>(
    url: string,
    body: P,
    config?: AxiosRequestConfig<P>,
): Promise<R> {
    const { data } = await repository.post<R, AxiosResponse<R, P>, P>(
        url,
        body,
        config,
    );
    return data;
}

export async function patch<R, P>(
    url: string,
    body: P,
    config?: AxiosRequestConfig<P>,
): Promise<R> {
    const { data } = await repository.patch<R, AxiosResponse<R, P>, P>(
        url,
        body,
        config,
    );
    return data;
}

export async function del<R>(
    url: string,
    config?: AxiosRequestConfig,
): Promise<R> {
    const { data } = await repository.delete<R, AxiosResponse<R>>(url, config);
    return data;
}
