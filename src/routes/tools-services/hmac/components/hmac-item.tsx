import {
    Button,
    Checkbox,
    Divider,
    Input,
    Radio,
    Space,
    Typography,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { FormatType, HmacType } from "../types";
import { CryptoHmac } from "../utils";

export type HmacItemProps = {
    hmacType: HmacType;
};

const HmacItem = ({ hmacType }: HmacItemProps) => {
    const [originText, setOriginText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [originKey, setOriginKey] = useState("");
    const [autoUpdate, setAutoUpdate] = useState<boolean>(true);
    const [codeType, setCodeType] = useState<FormatType>(FormatType.Text);
    const [outCodeType, setOutCodeType] = useState<FormatType>(FormatType.Hex);

    const handleOutput = useCallback(() => {
        textEncode(originText, originKey);
    }, [originText, originKey, codeType, outCodeType]);

    useEffect(() => {
        if (autoUpdate) {
            textEncode(originText, originKey);
        }
    }, [originText, originKey, codeType, autoUpdate, outCodeType]);

    const textEncode = useCallback(
        (text: string, key: string) => {
            try {
                if (text == "" || key == "") {
                    setCipherText("");
                } else {
                    const result = CryptoHmac(
                        hmacType,
                        codeType,
                        outCodeType,
                        text,
                        key
                    );
                    setCipherText(result);
                }
            } catch (err) {
                setCipherText("格式错误");
            }
        },
        [originText, originKey, codeType, autoUpdate, outCodeType, hmacType]
    );
    return (
        <div>
            <Space direction={"vertical"} style={{ width: "100%" }}>
                <Space>
                    <Typography.Text>输入类型：</Typography.Text>
                    <Radio.Group
                        value={codeType}
                        onChange={(e) => setCodeType(e.target.value)}
                    >
                        <Radio value={FormatType.Text}>Text</Radio>
                    </Radio.Group>
                </Space>
                <Input.TextArea
                    rows={4}
                    placeholder={"原文"}
                    value={originText}
                    onChange={(e) => setOriginText(e.target.value)}
                    allowClear={true}
                />
                <Input.TextArea
                    rows={4}
                    placeholder={"Key"}
                    value={originKey}
                    onChange={(e) => setOriginKey(e.target.value)}
                    allowClear={true}
                />
            </Space>
            <Divider>
                <Space>
                    <Button onClick={handleOutput}>输出</Button>
                    <Checkbox
                        checked={autoUpdate}
                        onChange={(e) => setAutoUpdate(e.target.checked)}
                    >
                        自动更新
                    </Checkbox>
                </Space>
            </Divider>
            <Space direction={"vertical"} style={{ width: "100%" }}>
                <Space>
                    <Typography.Text>输出类型：</Typography.Text>
                    <Radio.Group
                        value={outCodeType}
                        onChange={(e) => setOutCodeType(e.target.value)}
                    >
                        <Radio value={FormatType.Hex}>Hex</Radio>
                        <Radio value={FormatType.Base64}>Base64</Radio>
                    </Radio.Group>
                </Space>
                <Input.TextArea
                    rows={4}
                    placeholder={"密文"}
                    readOnly={true}
                    value={cipherText}
                />
            </Space>
        </div>
    );
};

export default HmacItem;
