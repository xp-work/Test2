import React from "react";
import { Divider, Tabs, Typography } from "antd";

const OneWayEncryption = () => {
    return (
        <div>
            <Typography.Paragraph>one way encryption</Typography.Paragraph>
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
        </div>
    );
};

export default OneWayEncryption;
