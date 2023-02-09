import React, { useState } from "react";
import {
    Button,
    Col,
    Input,
    InputNumber,
    Row,
    notification,
    Slider,
    Space,
    Spin,
    Typography,
    Tooltip,
} from "antd";
import { useDebounceFn } from "ahooks";
import { JSEncrypt } from "jsencrypt";
import { nsLocalStorage } from "@project-self/utils/storgae";
import { PageLocalStorage } from "@project-self/assets/consts";
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const minBit = 8;
const maxBit = 4096;
const stepBit = 8;

type GenerateKey = {
    publicKey: string;
    privateKey: string;
};
const generatePublicKey = (key: JSEncrypt): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(key.getPublicKey());
        }, 200);
    });
};
const generatePrivateKey = (key: JSEncrypt): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(key.getPrivateKey());
        }, 500);
    });
};
const generateKeyAsync = async (
    bitLengthNumber: number
): Promise<GenerateKey> => {
    const key = new JSEncrypt({
        default_key_size: bitLengthNumber.toString(),
    });
    const _publicKey = await generatePublicKey(key);
    const _privateKey = await generatePrivateKey(key);
    return {
        publicKey: _publicKey,
        privateKey: _privateKey,
    };
};
const RsaGenerate = () => {
    const [bitLength, setBitLength] = useState(512);
    const [loading, setLoading] = useState(false);
    const [privateKey, setPrivateKey] = useState("");
    const [publicKey, setPublicKey] = useState("");
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
                setPublicKey(key.publicKey);
                setPrivateKey(key.privateKey);
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
        <section className={"h-full overflow-auto p-1"}>
            <Spin tip={"生成中..."} spinning={loading}>
                <Typography.Paragraph>
                    此处只用来生成RSA非对称加密密钥，具体的加密和解密请前往
                    <Link to={"/safety/rsa-use"}>此处</Link>
                </Typography.Paragraph>
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
                        <Input.TextArea rows={26} readOnly value={publicKey} />
                    </Col>
                    <Col span={12}>
                        <Typography.Title level={5}>私钥</Typography.Title>
                        <Input.TextArea rows={26} readOnly value={privateKey} />
                    </Col>
                </Row>
            </Spin>
        </section>
    );
};

export default RsaGenerate;
