import React, { useState } from "react";
import { Button, InputNumber, List, Space, Typography } from "antd";
import { isNumber } from "lodash";
import {GuidGenerator, GuidType} from "@project-self/routes/tools-services/guid-page/utils";

type GuidPageItemProps = {
    description:string,
    format: number,
    type: GuidType,
    count: number,
}

const GuidPageItem = (props:GuidPageItemProps) => {
    const [count, setCount] = useState(props.count);
    const [strList, setStrList] = useState<string[]>([]);
    const handleGenerate = () => {
        const arr: string[] = [];
        for (let i = 0; i < count; i++) {
            arr.push(GuidGenerator(props.type,props.format));
        }
        setStrList(arr);
    };

    return (
        <Space direction={"vertical"}>
            <Typography.Paragraph>{props.description}</Typography.Paragraph>
            <Space size={"large"}>
                <InputNumber
                    addonBefore={"生成数量"}
                    defaultValue={count}
                    onChange={(v) =>
                        isNumber(v) ? setCount(v) : setCount(count)
                    }
                />
                <Button type="primary" onClick={handleGenerate}>
                    生成
                </Button>
            </Space>
            <List
                bordered
                dataSource={strList}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Paragraph copyable>
                            {item}
                        </Typography.Paragraph>
                    </List.Item>
                )}
            />
        </Space>
    );
};
export default GuidPageItem;
