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
} from "antd";
import { useDebounceFn } from "ahooks";
import { JSEncrypt } from "jsencrypt";
import { nsLocalStorage } from "@project-self/utils/storgae";
import { PageLocalStorage } from "@project-self/assets/consts";

const minBit = 8;
const maxBit = 4096;

type GenerateKey = {
    publicKey: string;
    privateKey: string;
};

const generateKeyAsync = async (
    bitLengthNumber: number
): Promise<GenerateKey> => {
    const key = new JSEncrypt({
        default_key_size: bitLengthNumber.toString(),
    });
    return {
        publicKey: key.getPublicKey(),
        privateKey: key.getPrivateKey(),
    };
};
const RsaGenerate = () => {
    const [bitLength, setBitLength] = useState(minBit);
    const [loading, setLoading] = useState(false);
    const [privateKey, setPrivateKey] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const bitChangeDebounce = useDebounceFn(bitChangeFun, { wait: 400 });

    function bitChangeFun(newValue: number | null) {
        let _value = newValue;
        if (_value != null) {
            const decimals = _value / minBit;
            const integerStr = decimals.toFixed();
            _value = Number(integerStr) * minBit;
            if (_value < minBit) {
                _value = minBit;
            }
            if (_value > maxBit) {
                _value = maxBit;
            }
        }
        setBitLength(_value ?? 8);
    }

    const generateKey = () => {
        setLoading(true);
        generateKeyAsync(bitLength)
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
                <Space align={"center"}>
                    <Typography.Text>请滑动选择位数：</Typography.Text>
                    <Slider
                        className={"w-[32rem]"}
                        min={minBit}
                        max={maxBit}
                        step={minBit}
                        onChange={bitChangeFun}
                        value={bitLength}
                    />
                    <InputNumber
                        min={minBit}
                        max={maxBit}
                        step={minBit}
                        className={"w-32"}
                        addonAfter={"位数"}
                        value={bitLength}
                        onChange={bitChangeDebounce.run}
                        onStep={bitChangeFun}
                    />
                    <Button
                        type={"primary"}
                        onClick={() => generateKey()}
                        loading={loading}
                    >
                        生成公私钥
                    </Button>
                </Space>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Typography.Title level={5}>公钥</Typography.Title>
                        <Input.TextArea rows={28} readOnly value={publicKey} />
                    </Col>
                    <Col span={12}>
                        <Typography.Title level={5}>私钥</Typography.Title>
                        <Input.TextArea rows={28} readOnly value={privateKey} />
                    </Col>
                </Row>
            </Spin>
        </section>
    );
};

export default RsaGenerate;
