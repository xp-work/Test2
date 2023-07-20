export type SeverityLevel = "fatal" | "error" | "warning" | "log" | "info" | "debug";

export interface ILoggerInfo {
	controllerName?: string;
	actionName?: string;
	error?: unknown;
	message?: string;
}

export interface ILoggerInfoWithLevel extends ILoggerInfo {
	level?: SeverityLevel;
}

export interface ILoggerInfoWithTime extends ILoggerInfoWithLevel {
	date?: Date;
}
