import { SeverityLevel } from "@project-self/types/severity-level";

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
    level: SeverityLevel,
    error?: any
) => {
    // eslint-disable-next-line no-console
    console.log(
        `Controller：${controllerName}, Action：${actionName}, Level：${level}, Error: ${error}`,
        `color:${switchLevelColor(level)};`
    );
};

/**
 * @description 日志等级：*
 */
const LogTrace = (controllerName: string, actionName: string, error?: any) => {
    basic(controllerName, actionName, "log", error);
};

/**
 * @description 日志等级：**
 */
const LogInformation = (
    controllerName: string,
    actionName: string,
    error?: any
) => {
    basic(controllerName, actionName, "info", error);
};

/**
 * @description 日志等级：***
 */
const LogWarning = (
    controllerName: string,
    actionName: string,
    error?: any
) => {
    basic(controllerName, actionName, "warning", error);
};

/**
 * @description 日志等级：****
 */
const LogError = (controllerName: string, actionName: string, error?: any) => {
    basic(controllerName, actionName, "error", error);
};

/**
 * @description 日志等级：*****
 */
const LogFatal = (controllerName: string, actionName: string, error?: any) => {
    basic(controllerName, actionName, "fatal", error);
};

const Logger = {
    LogInformation,
    LogTrace,
    LogWarning,
    LogError,
    LogFatal,
};

export default Logger;
