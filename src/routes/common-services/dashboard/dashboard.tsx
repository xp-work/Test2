import React from "react";
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className={"h-full overflow-auto p-4"}>
            <Space direction={"vertical"}>
                <Typography.Title level={3}>安全工具</Typography.Title>
                <Row gutter={[6, 6]}>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/safety/one-way-encryption"}>
                            <Card
                                title={"单向加密"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>
                                    MD5、SHA1、SHA224、SHA256、SHA384、SHA512、SHA3
                                </p>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/safety/hmac"}>
                            <Card
                                title={"HMAC"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>
                                    HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512、HmacSHA3
                                </p>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/safety/rsa-use"}>
                            <Card
                                title={"RSA 加解密"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>RSA 非对称加密的加解密依赖于公钥和私钥</p>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>
                <Divider />
                <Typography.Title level={3}>生成工具</Typography.Title>
                <Row gutter={[6, 6]}>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/generate/random-string"}>
                            <Card
                                title={"随机字符串"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>
                                    URL安全访问的格式、纯数字的格式、容易区别的格式、自定义的格式
                                </p>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/generate/uuid"}>
                            <Card
                                title={"Uuid"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>
                                    通用唯一识别码（英语：Universally Unique
                                    Identifier，缩写：UUID）是用于计算机体系中以识别信息的一个128位标识符
                                </p>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col span={6} className={"px-3"}>
                        <NavLink to={"/generate/rsa-generate"}>
                            <Card
                                title={"RSA 生成"}
                                hoverable={true}
                                className={"w-full h-full"}
                            >
                                <p>
                                    RSA加密算法是一种非对称加密算法，在公开密钥加密和电子商业中被广泛使用
                                </p>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>
            </Space>
        </section>
    );
};

export default Dashboard;
