import React, { useCallback, useState } from "react";
import { Checkbox, Space, Tabs } from "antd";
import useCommonSearchParams from "@project-self/hooks/useCommonSearchParams";
import {
    GuidGeneratorFormat,
    GuidType,
} from "@project-self/routes/tools-services/guid-page/utils";
import GuidPageItem from "@project-self/routes/tools-services/guid-page/components/guid-page-item";

type paramsType = {
    tab: string;
    format: number;
};

const GuidPage = () => {
    const [params, setParams] = useCommonSearchParams<paramsType>({
        tab: GuidType.v1,
        format: 0,
    });
    const [format, setFormat] = useState(params.format);

    const handleTabSwitch = (key: string) => {
        setParams({
            tab: key,
            format: format,
        });
    };

    const handleFormatChange = useCallback(
        (type: GuidGeneratorFormat) => {
            if ((format & type) == type) {
                setFormat(format - type);
                setParams({
                    tab: params.tab,
                    format: format - type,
                });
            } else {
                setFormat(format | type);
                setParams({
                    tab: params.tab,
                    format: format | type,
                });
            }
        },
        [format]
    );
    return (
        <section className={"h-full"}>
            <Space>
                <Checkbox
                    checked={
                        (format & GuidGeneratorFormat.Uppercase) ==
                        GuidGeneratorFormat.Uppercase
                    }
                    onChange={() =>
                        handleFormatChange(GuidGeneratorFormat.Uppercase)
                    }
                >
                    大写
                </Checkbox>
                <Checkbox
                    checked={
                        (format & GuidGeneratorFormat.Braces) ==
                        GuidGeneratorFormat.Braces
                    }
                    onChange={() =>
                        handleFormatChange(GuidGeneratorFormat.Braces)
                    }
                >
                    有大括号
                </Checkbox>
                <Checkbox
                    checked={
                        (format & GuidGeneratorFormat.Hyphens) ==
                        GuidGeneratorFormat.Hyphens
                    }
                    onChange={() =>
                        handleFormatChange(GuidGeneratorFormat.Hyphens)
                    }
                >
                    无连字符
                </Checkbox>
            </Space>
            <Tabs
                className={"h-full overflow-auto"}
                defaultActiveKey={params.tab}
                onChange={handleTabSwitch}
                items={[
                    {
                        label: GuidType.v1,
                        key: GuidType.v1,
                        children: (
                            <GuidPageItem
                                description={"创建 版本 1 (时间戳) UUID"}
                                format={params.format}
                                type={GuidType.v1}
                                count={1}
                            />
                        ),
                    },
                    {
                        label: GuidType.v4,
                        key: GuidType.v4,
                        children: (
                            <GuidPageItem
                                description={"创建 版本 4 (随机) UUID"}
                                format={params.format}
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

export default GuidPage;
