import React from "react";
import { useParams } from "react-router-dom";
import { Divider, Tabs, Typography } from "antd";
import useTabKey from "@project-self/hooks/useTabKey";

const HMAC = () => {
    const [tabKey, setTabKey] = useTabKey("1");
    const { id } = useParams();
    console.log(id);
    console.log("tabKey:", tabKey);
    const onChange = (key: string) => {
        console.log(key);
        setTabKey(key);
    };
    return (
        <div>
            <Typography.Paragraph>
                密钥散列消息认证码（英语：Keyed-hash message authentication
                code），又称散列消息认证码（Hash-based message authentication
                code，缩写为HMAC），是一种通过特别计算方式之后产生的消息认证码（MAC），使用密码散列函数，同时结合一个加密密钥。它可以用来保证资料的完整性，同时可以用来作某个消息的身份验证。
            </Typography.Paragraph>
            <Typography.Paragraph>
                -- 来自
                <Typography.Link
                    href={"https://zh.wikipedia.org/wiki/HMAC"}
                    target={"_blank"}
                    rel={"nofollow noopener noreferrer"}
                >
                    维基百科
                </Typography.Link>
            </Typography.Paragraph>
            <Divider />
            <Tabs
                defaultActiveKey={tabKey}
                onChange={onChange}
                items={[
                    {
                        label: `Tab 1`,
                        key: "1",
                        children: `Content of Tab Pane 1`,
                    },
                    {
                        label: `Tab 2`,
                        key: "2",
                        children: `Content of Tab Pane 2`,
                    },
                    {
                        label: `Tab 3`,
                        key: "3",
                        children: `Content of Tab Pane 3`,
                    },
                ]}
            />
        </div>
    );
};

export default HMAC;
