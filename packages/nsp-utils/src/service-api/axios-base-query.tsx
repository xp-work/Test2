import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { HttpStatusCodes, MIME } from "../constants";
// import Logger from "../logger";
import { ApiError, BusinessApiError, CustomRequestConfig, ServiceResponse } from "./types";

const defaultCustomConfig: CustomRequestConfig = {
	isAutoLoading: false,
};

const exportMimes = [MIME.pdf, MIME.xlsx, MIME.xls, MIME.zip, MIME.octetStream, MIME.txt].map((i) =>
	i.toString()
);

/**
 * this method return axios-based query method for rtk-query
 * @param axiosInstance axios instance with specified config
 * @param baseURL request baseURL
 * @returns Query method can be passed to rtk-query or called directly.
 */
export const axiosBaseQuery =
	(
		axiosInstance: AxiosInstance,
		baseURL = "",
		handles: {
			onRequestSucceed?: (config: CustomRequestConfig, data: unknown) => void;
			onRequestError?: (error: ApiError) => void;
		}
	): BaseQueryFn<
		{
			url: string;
			requestConfig?: AxiosRequestConfig;
			customRequestConfig?: CustomRequestConfig;
		},
		ServiceResponse<unknown>,
		ApiError
	> =>
	async ({ url, requestConfig, customRequestConfig }) => {
		const _customRequestConfig = {
			...defaultCustomConfig,
			...customRequestConfig,
		};
		try {
			const result = await axiosInstance(url, {
				baseURL: requestConfig?.baseURL ?? baseURL,
				..._customRequestConfig,
				...requestConfig,
			});

			//backend return a stream instead of CommonResponse.
			if (
				result.status === HttpStatusCodes.OK &&
				result.data &&
				exportMimes.includes(result.headers["content-type"])
			) {
				return { data: { data: result.data } as ServiceResponse<unknown> };
			}

			const data = result.data as ServiceResponse<unknown>;

			if (!data.success) {
				const businessError: BusinessApiError = {
					errorMessage: data.errorMessage,
					errorLevel: data.errorLevel,
				};
				throw businessError;
			}

			handles.onRequestSucceed && handles.onRequestSucceed(_customRequestConfig, data.data);

			return { data };
		} catch (e) {
			const apiError = normalizeApiError(e as Error, handles.onRequestError);
			// Logger.error("request error: ", e);
			return {
				error: apiError,
			};
		}
	};

const normalizeApiError = (e: Error, onRequestError?: (error: ApiError) => void) => {
	const axiosError = e as AxiosError;
	let apiError: ApiError;
	if (axiosError.isAxiosError) {
		apiError = {
			message: e?.message,
			statusCode: axiosError.response?.status,
			errorLevel: "error",
			isAxiosError: true,
		};
	} else {
		const businessError = e as unknown as BusinessApiError;
		apiError = {
			message: businessError.errorMessage,
			statusCode: HttpStatusCodes.InternalServerError,
			errorLevel: businessError.errorLevel,
			isAxiosError: false,
		};
	}

	if (typeof onRequestError === "function") {
		onRequestError(apiError);
	}

	return apiError;
};
