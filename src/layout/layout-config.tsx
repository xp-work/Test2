import React from "react";
import { ConfigProvider } from "antd";
import LayoutIndex from "./layout-index";
import zhCN from "antd/locale/zh_CN";
import { useAppSelector } from "@project-self/hooks/useAppDispatch";
import { selectGlobalThemeColor } from "@project-self/selector/selector";

const LayoutConfig = () => {
    const themeColor = useAppSelector(selectGlobalThemeColor);
    return (
        //     "colorPrimary": "#13c2c2",
        // "colorSuccess": "#7eef5c",
        // "colorWarning": "#ffc700",
        // "colorError": "#f5222d"
        // https://ant-design.github.io/antd-token-previewer/~demos/docs-theme-editor-simple 主题调试
        <ConfigProvider
            locale={zhCN}
            theme={{
                token: {
                    colorPrimary: themeColor.colorPrimary,
                    colorSuccess: themeColor.colorSuccess,
                    colorWarning: themeColor.colorWarning,
                    colorError: themeColor.colorError,
                },
            }}
        >
            <LayoutIndex />
        </ConfigProvider>
    );
};

export default LayoutConfig;
