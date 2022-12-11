import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center pt-20">
            <Result
                status="404"
                title="404"
                subTitle="对不起，您访问的页面不存在。"
                extra={
                    <Button
                        type="primary"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        返回首页
                    </Button>
                }
            />
        </div>
    );
};

export default NotFound;
