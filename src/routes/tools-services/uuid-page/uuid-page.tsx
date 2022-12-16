import React, { useCallback, useState } from "react";
import { Checkbox, Space, Tabs } from "antd";
import {
    UuidGeneratorFormat,
    GuidType,
} from "@project-self/routes/tools-services/uuid-page/utils";
import UuidPageItem from "@project-self/routes/tools-services/uuid-page/components/uuid-page-item";
import useTabKey from "@project-self/hooks/useTabKey";

const UuidPage = () => {
    const [tabKey, setTabKey] = useTabKey(GuidType.v1);
    const [format, setFormat] = useState(0);

    const handleTabSwitch = (key: string) => {
        setTabKey(key);
    };

    const handleFormatChange = useCallback(
        (type: UuidGeneratorFormat) => {
            if ((format & type) == type) {
                setFormat(format - type);
            } else {
                setFormat(format | type);
            }
        },
        [format]
    );
    return (
        <section className={"h-full"}>
            <Space>
                <Checkbox
                    checked={
                        (format & UuidGeneratorFormat.Uppercase) ==
                        UuidGeneratorFormat.Uppercase
                    }
                    onChange={() =>
                        handleFormatChange(UuidGeneratorFormat.Uppercase)
                    }
                >
                    大写
                </Checkbox>
                <Checkbox
                    checked={
                        (format & UuidGeneratorFormat.Braces) ==
                        UuidGeneratorFormat.Braces
                    }
                    onChange={() =>
                        handleFormatChange(UuidGeneratorFormat.Braces)
                    }
                >
                    有大括号
                </Checkbox>
                <Checkbox
                    checked={
                        (format & UuidGeneratorFormat.Hyphens) ==
                        UuidGeneratorFormat.Hyphens
                    }
                    onChange={() =>
                        handleFormatChange(UuidGeneratorFormat.Hyphens)
                    }
                >
                    无连字符
                </Checkbox>
            </Space>
            <Tabs
                className={"h-full overflow-auto"}
                defaultActiveKey={tabKey}
                onChange={handleTabSwitch}
                items={[
                    {
                        label: GuidType.v1,
                        key: GuidType.v1,
                        children: (
                            <UuidPageItem
                                description={"创建 版本 1 (时间戳) UUID"}
                                format={format}
                                type={GuidType.v1}
                                count={1}
                            />
                        ),
                    },
                    {
                        label: GuidType.v4,
                        key: GuidType.v4,
                        children: (
                            <UuidPageItem
                                description={"创建 版本 4 (随机) UUID"}
                                format={format}
                                type={GuidType.v4}
                                count={10}
                            />
                        ),
                    },
                ]}
            />
        </section>
    );
};

export default UuidPage;
