import React, { CSSProperties } from "react";
import styles from "./global-loading.module.scss";
import { Spin, theme } from "antd";

const { useToken } = theme;
export interface IGlobalLoadingProps {
    message?: string;
    style?: CSSProperties;
}

const GlobalLoading = (props: IGlobalLoadingProps) => {
    const message = props.message ?? "正在加载中...";
    const { token } = useToken();

    return (
        <div className={styles.loadingWrapper} style={props.style}>
            <div className={styles.loadingContainer}>
                <Spin spinning={true} />
                <br />
                <span
                    className={styles.text}
                    style={{ color: token.colorPrimary }}
                >
                    {message}
                </span>
            </div>
        </div>
    );
};

export default GlobalLoading;
