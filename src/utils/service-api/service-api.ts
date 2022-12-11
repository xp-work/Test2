import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { configAxiosInstance } from "./config-axios-instance";

export const serviceApiConfiguration = {
    baseURL: window._API_END_POINT,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

//serviceApi 使用的 axio 实例。
export const axioInstance = axios.create(serviceApiConfiguration);
configAxiosInstance(axioInstance);

/**
 * extend axios AxiosRequestConfig.
 */
type CustomRequestOptions = {
    //should enable autoLoading feature
    isAutoLoading?: boolean;
};

export type CustomRequestConfig = Omit<
    CustomRequestOptions,
    keyof AxiosRequestConfig
>;

export type ActuallyRequestConfig = AxiosRequestConfig & CustomRequestConfig;

const defaultCustomConfig: CustomRequestConfig = {
    isAutoLoading: true,
};
/**
 * 共通的请求FUJI后端API的方法，请求其他后端服务器的方法应该使用别的 axios 实例自行进行请求方法的封装。
 * 其他特性：利用 interceptors 自动添加 Access Token, 根据 Fuji 后端的返回结构自动进行处理 —— 数据提取，errorCode 自动转换 Message...
 * @param url
 * @param requestConfig
 * @param customConfig
 * @returns
 */
function serviceApi<T = any>(
    url: string,
    requestConfig: AxiosRequestConfig = {},
    customConfig: CustomRequestConfig = defaultCustomConfig
): AxiosPromise<CommonResult<T>> {
    return axioInstance(url, {
        ...defaultCustomConfig,
        ...customConfig,
        ...requestConfig,
    })
        .catch((reason) => {
            return Promise.reject(reason);
        })
        .then((response) => Promise.resolve(response));
}

export { serviceApi };
