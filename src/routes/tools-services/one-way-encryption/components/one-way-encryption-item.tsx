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
import { FormatType, OneWayEncryptionType } from "../types";
import { CryptoOneWayEncryption } from "../utils";

export type OneWayEncryptionItemProps = {
    encryptionType: OneWayEncryptionType;
    description?: React.ReactNode;
};

const OneWayEncryptionItem = (props: OneWayEncryptionItemProps) => {
    const [originText, setOriginText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [autoUpdate, setAutoUpdate] = useState<boolean>(true);
    const [codeType, setCodeType] = useState<FormatType>(FormatType.Text);
    const [outCodeType, setOutCodeType] = useState<FormatType>(FormatType.Hex);

    useEffect(() => {
        if (autoUpdate) {
            textEncode(originText);
        }
    }, [originText, codeType, autoUpdate, outCodeType]);

    const handleOutput = useCallback(() => {
        textEncode(originText);
    }, [originText, codeType, outCodeType]);

    const textEncode = useCallback(
        (text: string) => {
            try {
                if (text == "") {
                    setCipherText("");
                } else {
                    const result = CryptoOneWayEncryption(
                        props.encryptionType,
                        codeType,
                        outCodeType,
                        text
                    );
                    setCipherText(result);
                }
            } catch (err) {
                setCipherText("格式错误");
            }
        },
        [originText, codeType, autoUpdate, outCodeType, props.encryptionType]
    );

    return (
        <React.Fragment>
            {props.description && (
                <React.Fragment>
                    {props.description}
                    <Divider />
                </React.Fragment>
            )}
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
        </React.Fragment>
    );
};

export default OneWayEncryptionItem;
