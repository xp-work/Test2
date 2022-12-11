import { AxiosError, AxiosInstance } from "axios";
import Logger from "../logger";
import { ApiToken, HttpStatusCode } from "@project-self/assets/consts";
import { redirectToLogin } from "../auth";
import { getToken } from "@project-self/utils/auth/access-token";

export function configAxiosInstance(axiosInstance: AxiosInstance): void {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (config.headers != undefined) {
                config.headers.Authorization = `Bearer ${token}`;
                config.headers.apifoxToken = ApiToken;
            }
            return config;
        },
        (error) => {
            Logger.LogError("configAxiosInstance", "request", error);
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: AxiosError) => {
            if (error.response?.status === HttpStatusCode.Unauthorized) {
                setTimeout(() => {
                    redirectToLogin();
                }, 1000);
            } else {
                Logger.LogError("configAxiosInstance", "response", error);
            }
            return Promise.reject(error);
        }
    );
}
