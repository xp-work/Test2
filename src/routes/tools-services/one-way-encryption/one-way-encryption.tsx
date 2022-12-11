import useTabKey from "@project-self/hooks/useTabKey";
import { Tabs, Typography } from "antd";
import React from "react";
import OneWayEncryptionItem from "./components/one-way-encryption-item";
import OneWayEncryptionSha3 from "./components/one-way-encryption-sha3";
import { OneWayEncryptionType } from "./types";

const Md5Description = (
    <React.Fragment>
        <Typography.Paragraph>
            MD5消息摘要算法（英语：MD5 Message-Digest
            Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16个字符(BYTES)）的散列值（hash
            value），用于确保信息传输完整一致。MD5由美国密码学家罗纳德·李维斯特（Ronald
            Linn Rivest）设计，于1992年公开，用以取代MD4算法。这套算法的程序在
            RFC 1321 中被加以规范。
        </Typography.Paragraph>
        <Typography.Paragraph>
            将数据（如一段文字）运算变为另一固定长度值，是散列算法的基础原理。
        </Typography.Paragraph>
        <Typography.Paragraph>
            1996年后被证实存在弱点，可以被加以破解，对于需要高度安全性的资料，专家一般建议改用其他算法，如SHA-2。2004年，证实MD5算法无法防止碰撞攻击，因此不适用于安全性认证，如SSL公开密钥认证或是数字签名等用途。
        </Typography.Paragraph>
        <Typography.Paragraph>
            -- 来自
            <Typography.Link
                href={"https://zh.wikipedia.org/wiki/MD5"}
                target={"_blank"}
                rel={"nofollow noopener noreferrer"}
            >
                维基百科
            </Typography.Link>
        </Typography.Paragraph>
    </React.Fragment>
);

const Sha1Description = (
    <React.Fragment>
        <Typography.Paragraph>
            SHA-1（英语：Secure Hash Algorithm
            1，中文名：安全散列算法1）是一种密码散列函数，美国国家安全局设计，并由美国国家标准技术研究所（NIST）发布为联邦资料处理标准（FIPS）。SHA-1可以生成一个被称为消息摘要的160位（20字节）散列值，散列值通常的呈现形式为40个十六进制数。
        </Typography.Paragraph>
        <Typography.Paragraph>
            2005年，密码分析人员发现了对SHA-1的有效攻击方法，这表明该算法可能不够安全，不能继续使用，自2010年以来，许多组织建议用SHA-2或SHA-3来替换SHA-1。Microsoft、Google以及Mozilla都宣布，它们旗下的浏览器将在2017年停止接受使用SHA-1算法签名的SSL证书。
        </Typography.Paragraph>
        <Typography.Paragraph>
            2017年2月23日，CWI
            Amsterdam与Google宣布了一个成功的SHA-1碰撞攻击，发布了两份内容不同但SHA-1散列值相同的PDF文件作为概念证明。
        </Typography.Paragraph>
        <Typography.Paragraph>
            2020年，针对SHA-1的选择前缀冲突攻击已经实际可行。建议尽可能用SHA-2或SHA-3取代SHA-1。
        </Typography.Paragraph>
        <Typography.Paragraph>
            -- 来自
            <Typography.Link
                href={"https://zh.wikipedia.org/wiki/SHA-1"}
                target={"_blank"}
                rel={"nofollow noopener noreferrer"}
            >
                维基百科
            </Typography.Link>
        </Typography.Paragraph>
    </React.Fragment>
);

const Sha2Description = (
    <React.Fragment>
        <Typography.Paragraph>
            SHA-2，名称来自于安全散列算法2（英语：Secure Hash Algorithm
            2）的缩写，一种密码散列函数算法标准，由美国国家安全局研发，由美国国家标准与技术研究院（NIST）在2001年发布。属于SHA算法之一，是SHA-1的后继者。其下又可再分为六个不同的算法标准，包括了：SHA-224、SHA-256、SHA-384、SHA-512、SHA-512/224、SHA-512/256。
        </Typography.Paragraph>
        <Typography.Paragraph>
            我们常说的 SHA256、SHA512等指的就是SHA-2算法
        </Typography.Paragraph>
        <Typography.Paragraph>
            -- 来自
            <Typography.Link
                href={"https://zh.wikipedia.org/wiki/SHA-2"}
                target={"_blank"}
                rel={"nofollow noopener noreferrer"}
            >
                维基百科
            </Typography.Link>
        </Typography.Paragraph>
    </React.Fragment>
);

const OneWayEncryption = () => {
    const [tabKey, setTabKey] = useTabKey(OneWayEncryptionType.MD5);

    const handleTabSwitch = (key: string) => {
        setTabKey(key);
    };

    return (
        <section>
            <Tabs
                defaultActiveKey={tabKey}
                onChange={handleTabSwitch}
                items={[
                    {
                        label: OneWayEncryptionType.MD5,
                        key: OneWayEncryptionType.MD5,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.MD5}
                                description={Md5Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA1,
                        key: OneWayEncryptionType.SHA1,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.SHA1}
                                description={Sha1Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA224,
                        key: OneWayEncryptionType.SHA224,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.SHA224}
                                description={Sha2Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA256,
                        key: OneWayEncryptionType.SHA256,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.SHA256}
                                description={Sha2Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA384,
                        key: OneWayEncryptionType.SHA384,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.SHA384}
                                description={Sha2Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA512,
                        key: OneWayEncryptionType.SHA512,
                        children: (
                            <OneWayEncryptionItem
                                encryptionType={OneWayEncryptionType.SHA512}
                                description={Sha2Description}
                            />
                        ),
                    },
                    {
                        label: OneWayEncryptionType.SHA3,
                        key: OneWayEncryptionType.SHA3,
                        children: <OneWayEncryptionSha3 />,
                    },
                ]}
            />
        </section>
    );
};

export default OneWayEncryption;
