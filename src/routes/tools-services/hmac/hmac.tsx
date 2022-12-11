import useTabKey from "@project-self/hooks/useTabKey";
import React from "react";
import { Divider, Tabs, Typography } from "antd";
import { HmacType } from "./types";

import HmacItem from "./components/hmac-item";

const Hmac = () => {
    const [tabKey, setTabKey] = useTabKey(HmacType.MD5);

    const handleTabSwitch = (key: string) => {
        setTabKey(key);
    };

    return (
        <section className={"h-full"}>
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
                onChange={handleTabSwitch}
                items={[
                    {
                        label: HmacType.MD5,
                        key: HmacType.MD5,
                        children: <HmacItem hmacType={HmacType.MD5} />,
                    },
                    {
                        label: HmacType.SHA1,
                        key: HmacType.SHA1,
                        children: <HmacItem hmacType={HmacType.SHA1} />,
                    },
                    {
                        label: HmacType.SHA224,
                        key: HmacType.SHA224,
                        children: <HmacItem hmacType={HmacType.SHA224} />,
                    },
                    {
                        label: HmacType.SHA256,
                        key: HmacType.SHA256,
                        children: <HmacItem hmacType={HmacType.SHA256} />,
                    },
                    {
                        label: HmacType.SHA384,
                        key: HmacType.SHA384,
                        children: <HmacItem hmacType={HmacType.SHA384} />,
                    },
                    {
                        label: HmacType.SHA512,
                        key: HmacType.SHA512,
                        children: <HmacItem hmacType={HmacType.SHA512} />,
                    },
                    {
                        label: HmacType.SHA3,
                        key: HmacType.SHA3,
                        children: <HmacItem hmacType={HmacType.SHA3} />,
                    },
                ]}
            />
        </section>
    );
};

export default Hmac;
