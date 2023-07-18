import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import LayoutHeaderLeft from "@project-self/layouts/components/layout-header-left";
import LayoutHeaderRight from "@project-self/layouts/components/layout-header-right";
import LayoutLeftSidebar from "@project-self/layouts/components/layout-left-sidebar";
import LayoutSettingDrawer from "@project-self/layouts/components/layout-setting-drawer";
import LayoutBreadcrumb from "./components/layout-breadcrumb";

const LayoutMain = () => {
	const location = useLocation();
	const {
		token: { colorBgContainer, colorBgLayout, colorBorder },
	} = theme.useToken();

	return (
		<Layout className={"h-full w-full"} style={{ minWidth: "1280px" }}>
			<Layout.Header
				className={"flex flex-row items-center"}
				style={{
					backgroundColor: colorBgContainer,
					borderBottom: `1px solid ${colorBorder}`,
				}}
			>
				{/* header */}
				<LayoutHeaderLeft />
				<LayoutHeaderRight />
			</Layout.Header>
			<Layout>
				{/* left sidebar */}
				<LayoutLeftSidebar />
				<Layout.Content
					className={"h-full overflow-auto relative"}
					style={{ backgroundColor: colorBgLayout }}
				>
					<LayoutBreadcrumb />
					<Outlet />
				</Layout.Content>
			</Layout>
			<React.Fragment>
				{/* 所有layout可能都调用的组件放在此处，通过rtk调用 */}
				{import.meta.env.NSP_THEME_CONFIG == "true" && <LayoutSettingDrawer />}
			</React.Fragment>
		</Layout>
	);
};

export default LayoutMain;
