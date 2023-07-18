import { AxiosRequestConfig } from "axios";

export type ErrorLevel = "error" | "warning";

export type ServiceResponse<T> = {
	errorMessage: string;
	errorLevel: ErrorLevel;
	success: boolean;
	data: T;
	result: T;
};

/**
 * extend axios AxiosRequestConfig.
 */
type CustomRequestOptions = {
	//should enable autoLoading feature
	isAutoLoading?: boolean;
	succeedMsg?:
		| "delete"
		| "save"
		| ((data: unknown) => string | { level: "success" | "warn"; msg: JSX.Element | string });
};
/**
 * ! ensure CustomRequestConfig's property name !==  AxiosRequestConfig's property name
 */

export type CustomRequestConfig = Omit<CustomRequestOptions, keyof AxiosRequestConfig>;

export type ActuallyRequestConfig = AxiosRequestConfig & CustomRequestConfig;

export type ApiError = {
	statusCode: number | undefined;
	message: string;
	errorLevel: ErrorLevel;
	isAxiosError?: boolean;
};

export type BusinessApiError = {
	errorMessage: string;
	errorLevel: ErrorLevel;
};

/**
 * api error's custom type guard
 * @param error
 * @returns
 */
export const isApiError = (error: unknown): error is ApiError => {
	return (
		typeof error === "object" &&
		((error as ApiError).statusCode !== undefined || (error as ApiError).message !== undefined)
	);
};
