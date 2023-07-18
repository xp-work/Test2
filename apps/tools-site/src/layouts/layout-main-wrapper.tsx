import React from "react";
import { useAppSelector } from "@project-self/store/store";
import { selectGlobalState } from "@project-self/store/selector";
import { ConfigProvider, theme } from "antd";
import LayoutMain from "@project-self/layouts/layout-main";

const LayoutMainWrapper = () => {
	const globalState = useAppSelector(selectGlobalState);
	return (
		<ConfigProvider
			theme={{
				algorithm: globalState.theme.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorPrimary: globalState.theme.primaryColor,
				},
			}}
		>
			<LayoutMain />
		</ConfigProvider>
	);
};

export default LayoutMainWrapper;
