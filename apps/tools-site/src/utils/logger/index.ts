import { SeverityLevel } from "@sentry/react";
import * as Sentry from "@sentry/react";
import dayjs from "dayjs";

function switchLevelColor(level?: SeverityLevel): string {
	switch (level) {
		case "debug":
			return "#8c8c8c";
		case "info":
			return "#13c2c2";
		case "log":
			return "#1677ff";
		case "warning":
			return "#faad14";
		case "error":
			return "#fa541c";
		case "fatal":
			return "#faad14";
		default:
			return "#8c8c8c";
	}
}

const basic = (
	controllerName: string,
	actionName: string,
	message: string,
	level: SeverityLevel,
	error?: unknown
) => {
	const temp = `Controller：${controllerName}, Action：${actionName}, Message: ${message} Level：${level}, Error: ${error}, Date: ${dayjs().format()}`;

	const loggerInfo = {
		controller: controllerName,
		action: actionName,
		level: level,
		message: message,
		error: error,
		date: dayjs().format(),
	};

	if (import.meta.env.NSP_SENTRY == "true") {
		Sentry.withScope((scope) => {
			scope.setLevel(level);
			if (window._FINGERPRINT_ != undefined) {
				scope.setTag("fingerprint", window._FINGERPRINT_);
			}
			if (level == "fatal" || level == "error") {
				Sentry.captureException(loggerInfo);
			} else {
				Sentry.captureMessage(temp, level);
			}
		});
	}
	// eslint-disable-next-line no-console
	console.log("%c" + temp, `color:${switchLevelColor(level)};`);
	// eslint-disable-next-line no-console
	console.log(loggerInfo);
};

/**
 * @description 日志等级：*
 */
const LogTrace = (controllerName: string, actionName: string, message: string, error?: unknown) => {
	basic(controllerName, actionName, message, "log", error);
};

/**
 * @description 日志等级：**
 */
const LogInformation = (
	controllerName: string,
	actionName: string,
	message: string,
	error?: unknown
) => {
	basic(controllerName, actionName, message, "info", error);
};

/**
 * @description 日志等级：***
 */
const LogWarning = (
	controllerName: string,
	actionName: string,
	message: string,
	error?: unknown
) => {
	basic(controllerName, actionName, message, "warning", error);
};

/**
 * @description 日志等级：****
 */
const LogError = (controllerName: string, actionName: string, message: string, error?: unknown) => {
	basic(controllerName, actionName, message, "error", error);
};

/**
 * @description 日志等级：*****
 */
const LogFatal = (controllerName: string, actionName: string, message: string, error?: unknown) => {
	basic(controllerName, actionName, message, "fatal", error);
};

const Logger = {
	LogInformation,
	LogTrace,
	LogWarning,
	LogError,
	LogFatal,
};

export default Logger;
