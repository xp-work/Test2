import {
    Button,
    Col,
    Input,
    notification,
    Row,
    Space,
    Spin,
    Typography,
} from "antd";
import React, { useContext, useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { RsaKeyContext } from "@project-self/routes/tools-services/rsa/context";
import {
    decryptByPrivate,
    encryptByPublic,
} from "@project-self/routes/tools-services/rsa/utils";
import { useDebounceFn } from "ahooks";

const RsaUseMain = () => {
    const rsaKey = useContext(RsaKeyContext);
    const [plaintext, setPlaintext] = useState("");
    const [ciphertext, setCiphertext] = useState("");
    const [loading, setLoading] = useState(false);
    const encryptByPublicAction = useDebounceFn(encryptByPublicHandle, {
        wait: 500,
    });
    const decryptByPrivateAction = useDebounceFn(decryptByPrivateHandle, {
        wait: 500,
    });

    function encryptByPublicHandle() {
        setLoading(true);
        encryptByPublic(rsaKey.publicKey, plaintext)
            .then((x) => {
                setCiphertext(x);
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
    }

    function decryptByPrivateHandle() {
        setLoading(true);
        decryptByPrivate(rsaKey.privateKey, ciphertext)
            .then((x) => {
                setPlaintext(x);
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
    }
    return (
        <Spin spinning={loading}>
            <Row gutter={[4, 4]} align={"middle"}>
                <Col span={10}>
                    <Typography.Title level={5}>明文</Typography.Title>
                    <Input.TextArea
                        rows={13}
                        value={plaintext}
                        onChange={(e) => setPlaintext(e.target.value)}
                        allowClear
                    />
                </Col>
                <Col span={4}>
                    <Space
                        direction={"vertical"}
                        className={"w-full"}
                        align={"center"}
                    >
                        <Button
                            icon={<RightCircleOutlined />}
                            type={"primary"}
                            onClick={() => encryptByPublicAction.run()}
                        >
                            加密
                        </Button>
                        <Button
                            icon={<LeftCircleOutlined />}
                            type={"primary"}
                            onClick={() => decryptByPrivateAction.run()}
                        >
                            解密
                        </Button>
                    </Space>
                </Col>
                <Col span={10}>
                    <Typography.Title level={5}>密文</Typography.Title>
                    <Input.TextArea
                        rows={13}
                        value={ciphertext}
                        onChange={(e) => setCiphertext(e.target.value)}
                        allowClear
                    />
                </Col>
            </Row>
        </Spin>
    );
};
export default RsaUseMain;
