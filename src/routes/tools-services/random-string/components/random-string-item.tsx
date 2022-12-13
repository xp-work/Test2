import React, { useState } from "react";
import { RandomStringType } from "@project-self/routes/tools-services/random-string/types";
import CryptoRandomString from "@project-self/routes/tools-services/random-string/utils";
import { Button, InputNumber, List, Space, Typography } from "antd";
import { isNumber } from "lodash";

export type RandomStringItemProps = {
    randomStringType: RandomStringType;
    characters: string[];
};
const RandomStringItem = (props: RandomStringItemProps) => {
    const [len, setLen] = useState(32);
    const [count, setCount] = useState(10);
    const [strList, setStrList] = useState<string[]>([]);

    const generateCore = (): string[] => {
        const arr: string[] = [];
        for (let i = 0; i < count; i++) {
            arr.push(
                CryptoRandomString({
                    length: len,
                    type: props.randomStringType,
                })
            );
        }
        return arr;
    };

    const handleGenerate = () => {
        setStrList(generateCore());
    };
    return (
        <Space direction={"vertical"}>
            <Typography.Paragraph>
                格式组成：
                <Typography.Text keyboard>
                    {props.characters.join(" ")}
                </Typography.Text>
            </Typography.Paragraph>
            <Space size={"large"}>
                <InputNumber
                    addonBefore={"生成数量"}
                    defaultValue={count}
                    onChange={(v) =>
                        isNumber(v) ? setCount(v) : setCount(count)
                    }
                />
                <InputNumber
                    addonBefore={"生成长度"}
                    defaultValue={len}
                    onChange={(v) => (isNumber(v) ? setLen(v) : setLen(len))}
                />
                <Button type="primary" onClick={handleGenerate}>
                    生成
                </Button>
            </Space>
            <List
                bordered
                dataSource={strList}
                style={{ overflow: "auth" }}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Paragraph copyable>
                            {item}
                        </Typography.Paragraph>
                    </List.Item>
                )}
            />
        </Space>
    );
};

export default RandomStringItem;
