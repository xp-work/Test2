interface Window {
    //!!! _devHelper only available in dev mode's console, your code should not use it
    _devHelper: any;
    _AUTHORITY_ENDPOINT: string;
    _API_END_POINT: string;
    _ICON_FONT_URL: string;
    // google tags
    gtag: any;
}

type Styling<T> = {
    style?: React.CSSProperties;
    className?: string;
} & T;

type Nullable<T> = T | null;

type PartialNullable<T> = {
    [P in keyof T]?: Nullable<T[P]>;
};
type CommonResult<T> = {
    data: Nullable<T>;
    message: Nullable<string>;
    success: boolean;
};

/**
 * vite config define global variable
 */
declare const _PROJECT_NAMESPACE_: string;
declare const _MAIN_VERSION_: string;
declare const _BUILD_VERSION_: string;
declare const _LOGIN_STATUS_: boolean;
declare const _APP_SWITCH_URL: string;
