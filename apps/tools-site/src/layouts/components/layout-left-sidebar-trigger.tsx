import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export type LayoutLeftSideBarTriggerProps = {
    isAbsolute: boolean;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

const LayoutLeftSideBarTrigger = (props: LayoutLeftSideBarTriggerProps) => {
    return (
        <Button
            className={
                (props.isAbsolute ? "absolute top-4 -right-4 z-[101]" : "") +
                "hover:shadow-sm hover:shadow-slate-300"
            }
            shape={"circle"}
            icon={
                props.collapsed ? (
                    <RightOutlined
                        className={"text-slate-300 hover:text-slate-400"}
                    />
                ) : (
                    <LeftOutlined
                        className={"text-slate-300 hover:text-slate-400"}
                    />
                )
            }
            onClick={() => props.setCollapsed(!props.collapsed)}
        />
    );
};

export default LayoutLeftSideBarTrigger;
