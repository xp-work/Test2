import { Button, Menu, MenuProps, theme } from "antd";
import DynamicIcon from "@project-self/components/dynamic-icon/dynamic-icon";
import React from "react";

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
	key,
	label: `nav ${key}`,
}));

const LayoutHeaderLeft = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div className={"flex flex-row items-center flex-1 h-full"}>
			<div className="logo" />
			<Button icon={<DynamicIcon type={"application-menu"} icon={"iconpark"} />} />
			<Menu
				className={"flex-1"}
				style={{ backgroundColor: colorBgContainer }}
				mode="horizontal"
				defaultSelectedKeys={["2"]}
				items={items1}
			/>
		</div>
	);
};

export default LayoutHeaderLeft;
