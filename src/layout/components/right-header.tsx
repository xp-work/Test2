import {
    NotificationOutlined,
    LogoutOutlined,
    SettingOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Modal, Typography } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { changeLogoutStatus, selectProfile } from "@project-self/rtk/oidc";
import { redirectToLogout } from "@project-self/utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { AsyncStatus } from "@project-self/types/async-status";
import { useNavigate } from "react-router-dom";
import useAccess from "@project-self/hooks/useAccess";
const { confirm } = Modal;

export enum RightSettingType {
    SystemInfo = "SystemInfo",
    LogoOut = "LogoOut",
}

const RightHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);
    const handlerMenuClick: MenuProps["onClick"] = (e) => {
        const rightSettingType = e.key as RightSettingType;
        switch (rightSettingType) {
            case RightSettingType.LogoOut:
                confirm({
                    title: "退出登录?",
                    icon: <LogoutOutlined />,
                    content: "退出登录",
                    onOk: async function () {
                        dispatch(changeLogoutStatus(AsyncStatus.Pending));
                        await redirectToLogout();
                    },
                });
                break;
            case RightSettingType.SystemInfo:
                Modal.info({
                    title: "版本信息",
                    content: (
                        <div>
                            <p>
                                v{_MAIN_VERSION_} {_BUILD_VERSION_}
                            </p>
                        </div>
                    ),
                });
                break;
        }
    };
    return (
        <div className={"ml-4 flex items-center gap-3"}>
            <Button
                shape="circle"
                icon={<NotificationOutlined />}
                onClick={() => navigate("/notification")}
            />
            {profile?.picture != undefined && <Avatar src={profile?.picture} />}
            {profile?.name != undefined && (
                <Typography.Text style={{ color: "white" }}>
                    {profile?.name}
                </Typography.Text>
            )}
            <Dropdown
                overlay={
                    <Menu
                        onClick={handlerMenuClick}
                        items={[
                            {
                                key: RightSettingType.SystemInfo,
                                icon: <InfoCircleOutlined />,
                                label: "版本信息",
                            },
                            {
                                key: RightSettingType.LogoOut,
                                icon: <LogoutOutlined />,
                                label: "退出登录",
                            },
                        ]}
                    />
                }
                placement="bottomLeft"
                arrow={{ pointAtCenter: true }}
            >
                <Button shape="circle" icon={<SettingOutlined />} />
                {/*<SettingOutlined className={'text-2xl text-white cursor-pointer'} />*/}
            </Dropdown>
        </div>
    );
};

export default RightHeader;
