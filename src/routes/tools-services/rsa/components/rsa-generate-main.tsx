import React, { useContext, useState } from "react";
import { useDebounceFn } from "ahooks";
import { generateKeyAsync } from "@project-self/routes/tools-services/rsa/utils";
import { nsLocalStorage } from "@project-self/utils/storgae";
import { PageLocalStorage } from "@project-self/assets/consts";
import {
    Button,
    Col,
    Input,
    InputNumber,
    notification,
    Row,
    Slider,
    Space,
    Spin,
    Tooltip,
    Typography,
} from "antd";
import { Link } from "react-router-dom";
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
import { maxBit, minBit, stepBit } from "../types";
import { RsaKeyContext } from "@project-self/routes/tools-services/rsa/context";

export type RsaGenerateMainProps = {
    isSingle: boolean;
};
const RsaGenerateMain = (props: RsaGenerateMainProps) => {
    const rsaKey = useContext(RsaKeyContext);
    const [bitLength, setBitLength] = useState(512);
    const [loading, setLoading] = useState(false);
    const bitChangeDebounce = useDebounceFn(bitChangeFun, { wait: 400 });

    function bitChangeFun(newValue: number | null) {
        let _value = newValue;
        if (_value != null) {
            const decimals = _value / stepBit;
            const integerStr = decimals.toFixed();
            _value = Number(integerStr) * stepBit;
            if (_value < minBit) {
                _value = minBit;
            }
            if (_value > maxBit) {
                _value = maxBit;
            }
        }
        setBitLength(_value ?? 8);
    }

    const generateKey = (count: number) => {
        setLoading(true);
        generateKeyAsync(count)
            .then((key) => {
                if (rsaKey.setPublicKey != null) {
                    rsaKey.setPublicKey(key.publicKey);
                }
                if (rsaKey.setPrivateKey != null) {
                    rsaKey.setPrivateKey(key.privateKey);
                }

                nsLocalStorage(
                    PageLocalStorage.RsaGeneratePublicKey,
                    key.publicKey
                );
                nsLocalStorage(
                    PageLocalStorage.RsaGeneratePrivateKey,
                    key.privateKey
                );
            })
            .catch((x) => {
                notification["error"]({
                    message: "Generate RSA Error",
                    description: x,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <Spin tip={"生成中..."} spinning={loading}>
            {props.isSingle && (
                <Typography.Paragraph>
                    此处只用来生成RSA非对称加密密钥，具体的加密和解密请前往
                    <Link to={"/safety/rsa-use"}>此处</Link>
                </Typography.Paragraph>
            )}
            <Space align={"center"}>
                <Typography.Text>请滑动选择位数：</Typography.Text>
                <Slider
                    className={"w-[32rem]"}
                    min={minBit}
                    max={maxBit}
                    step={stepBit}
                    onChange={bitChangeFun}
                    value={bitLength}
                />
                <InputNumber
                    min={minBit}
                    max={maxBit}
                    step={stepBit}
                    className={"w-32"}
                    addonAfter={"位数"}
                    value={bitLength}
                    onChange={bitChangeDebounce.run}
                    onStep={bitChangeFun}
                />
                <Tooltip title="位数过大时生成时间较长，并且可能卡住游览器">
                    <ExclamationCircleOutlined />
                </Tooltip>
                <Button
                    type={"primary"}
                    icon={<CheckCircleOutlined />}
                    loading={loading}
                    onClick={() => generateKey(bitLength)}
                >
                    生成公私钥
                </Button>
            </Space>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <Typography.Title level={5}>公钥</Typography.Title>
                    <Input.TextArea
                        rows={props.isSingle ? 26 : 10}
                        readOnly={props.isSingle}
                        allowClear={!props.isSingle}
                        value={rsaKey.publicKey}
                        onChange={(e) => {
                            if (!props.isSingle) {
                                if (rsaKey.setPublicKey) {
                                    rsaKey.setPublicKey(e.target.value);
                                }
                            }
                        }}
                    />
                </Col>
                <Col span={12}>
                    <Typography.Title level={5}>私钥</Typography.Title>
                    <Input.TextArea
                        rows={props.isSingle ? 26 : 10}
                        readOnly={props.isSingle}
                        allowClear={!props.isSingle}
                        value={rsaKey.privateKey}
                        onChange={(e) => {
                            if (!props.isSingle) {
                                if (rsaKey.setPrivateKey) {
                                    rsaKey.setPrivateKey(e.target.value);
                                }
                            }
                        }}
                    />
                </Col>
            </Row>
        </Spin>
    );
};

export default RsaGenerateMain;
