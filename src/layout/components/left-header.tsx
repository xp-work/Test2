import React from "react";
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import Logger from "@project-self/utils/logger";
import { useDispatch } from "react-redux";
import { toggleLoading } from "@project-self/layout/rkt";
import { useAppSelector } from "@project-self/hooks/useAppDispatch";
import { selectLayoutMenuStatus } from "@project-self/layout/selector";

const LeftHeader = () => {
    const dispatch = useDispatch();
    const menuStatus = useAppSelector(selectLayoutMenuStatus);
    return (
        <Space className={"ml-4"} size={"large"}>
            <Button icon={<AppstoreOutlined />} />
            <Button
                icon={
                    menuStatus ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
                onClick={() => {
                    dispatch(toggleLoading());
                }}
            />
        </Space>
    );
};

export default LeftHeader;
