import React, { useState } from "react";
import CryptoRandomString, {
    CryptoRandomStringCharacters,
} from "@project-self/routes/tools-services/random-string/utils";
import { RandomStringType } from "@project-self/routes/tools-services/random-string/types";
import { Button, Input, InputNumber, List, Space, Typography } from "antd";
import { isNumber } from "lodash";

const RandomStringCustom = () => {
    const [len, setLen] = useState(32);
    const [count, setCount] = useState(10);
    const [strList, setStrList] = useState<string[]>([]);
    const [customCharacters, setCustomCharacters] = useState<string>(
        CryptoRandomStringCharacters.customDefaultCharacters.join("")
    );
    const generateCore = (): string[] => {
        const arr: string[] = [];
        for (let i = 0; i < count; i++) {
            arr.push(
                CryptoRandomString({
                    length: len,
                    type: RandomStringType.Custom,
                    characters: customCharacters,
                })
            );
        }
        return arr;
    };

    const handleGenerate = () => {
        setStrList(generateCore());
    };
    return (
        <Space direction={"vertical"} className={"w-10/12"}>
            <Typography.Paragraph>
                格式组成：
                <Typography.Text keyboard>
                    {customCharacters.split("").join(" ")}
                </Typography.Text>
            </Typography.Paragraph>
            <Input
                addonBefore={"自定义字符"}
                style={{ width: "620px" }}
                defaultValue={customCharacters}
                value={customCharacters}
                allowClear
                onChange={(e) => setCustomCharacters(e.target.value)}
            />
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

export default RandomStringCustom;
