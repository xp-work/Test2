import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout, Skeleton, theme } from "antd";
import LayoutHeaderLeft from "@project-self/layouts/components/layout-header-left";
import LayoutHeaderRight from "@project-self/layouts/components/layout-header-right";
import LayoutLeftSidebar from "@project-self/layouts/components/layout-left-sidebar";
import LayoutSettingDrawer from "@project-self/layouts/components/layout-setting-drawer";
import LayoutBreadcrumb from "./components/layout-breadcrumb";
import { useAppDispatch, useAppSelector } from "@project-self/store/store";
import { selectGlobalState } from "@project-self/store/selector";
import LayoutApplicationDrawer from "./components/layout-application-drawer";
import { useTranslation } from "nsp-i18n";
import { useBoolean } from "ahooks";
import { setLoading } from "@project-self/rtk/global-slice";
import GlobalLoading from "@project-self/components/global-loading/global-loading";
import LayoutFooter from "./components/layout-footer";

const LayoutMain = () => {
	const { t } = useTranslation();
	const globalState = useAppSelector(selectGlobalState);
	const dispatch = useAppDispatch();
	const [prepare, setPrepare] = useBoolean(true);
	const {
		token: { colorBgContainer, colorBgLayout, colorBorder, colorText },
	} = theme.useToken();

	useEffect(() => {
		document.title = t("COMMON.SITE_NAME");
	}, [globalState.language]);

	useEffect(() => {
		const init = async () => {
			await setTimeout(() => {
				setPrepare.setFalse();
			}, 300);
		};
		init();
	}, []);

	return (
		<Layout
			className={`h-full w-full ${globalState.theme.isDark ? "nsp-dark" : ""}`}
			style={{ minWidth: "1280px" }}
		>
			<Layout.Header
				className={"flex flex-row items-center px-4"}
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
				<LayoutLeftSidebar prepare={prepare} />
				<Layout.Content
					className={
						"flex flex-col h-full overflow-auto relative [&>section]:overflow-auto [&>section]:flex-1 [&>section]:px-4 [&>section]:py-2"
					}
					style={{ backgroundColor: colorBgLayout }}
				>
					{prepare && <Skeleton active={true} />}
					{!prepare && <LayoutBreadcrumb />}
					{!prepare && <Outlet />}
					{!prepare && <LayoutFooter />}
				</Layout.Content>
			</Layout>
			<React.Fragment>
				{/* 所有layout可能都调用的组件放在此处，通过rtk调用 */}
				{import.meta.env.NSP_THEME_CONFIG == "true" && <LayoutSettingDrawer />}
				<LayoutApplicationDrawer />
				{prepare && <GlobalLoading />}
			</React.Fragment>
		</Layout>
	);
};

export default LayoutMain;
