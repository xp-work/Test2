import React from "react";
import { Button, Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Row>
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
                            title={"UUID"}
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
            </Row>
        </div>
    );
};

export default Dashboard;
