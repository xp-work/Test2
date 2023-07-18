import { Button, Dropdown, MenuProps, Space, Tooltip } from "antd";
import { GithubOutlined, GlobalOutlined, TranslationOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@project-self/store/store";
import { selectGlobalState } from "@project-self/store/selector";
import { setLanguage, setThemeDark } from "@project-self/rtk/global-slice";
import { Languages, useTranslation } from "nsp-i18n";
import { setSettingDrawer } from "../rtk/layout-slice";
import { useCallback } from "react";
import DynamicIcon from "@project-self/components/dynamic-icon/dynamic-icon";
import { useNavigate } from "react-router-dom";

/**
 * @description 语言下拉菜单
 */
const LanguageDropdownMenus: MenuProps["items"] = [
	{
		label: "🇨🇳 中文",
		key: "zh-CN",
	},
	{
		label: "🇺🇸 English",
		key: "en-US",
	},
];

/**
 * @description 顶部右侧组件
 * @returns
 */
const LayoutHeaderRight = () => {
	const { t } = useTranslation();
	const globalState = useAppSelector(selectGlobalState);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLanguageMenuClick = useCallback(
		(e: any) => {
			var selectLang = e.key as Languages;
			if (globalState.language != selectLang) {
				dispatch(setLanguage(selectLang));
			}
		},
		[globalState.language]
	);
	return (
		<div className={"flex flex-row items-center flex-1 justify-end h-full"}>
			<Space>
				{import.meta.env.NSP_THEME_CONFIG == "true" && (
					<Tooltip placement="bottom" title={t("Layout.ThemeGlobalSetting")}>
						<Button
							icon={<GlobalOutlined />}
							onClick={() => dispatch(setSettingDrawer(true))}
						/>
					</Tooltip>
				)}
				{import.meta.env.NSP_THEME_CONFIG == "true" &&
					(globalState.theme.isDark ? (
						<Tooltip placement="bottom" title={t("Layout.DayTheme")}>
							<Button
								icon={<DynamicIcon type="sun-one" />}
								onClick={() => dispatch(setThemeDark(false))}
							/>
						</Tooltip>
					) : (
						<Tooltip placement="bottom" title={t("Layout.NightTheme")}>
							<Button
								icon={<DynamicIcon type="moon" />}
								onClick={() => dispatch(setThemeDark(true))}
							/>
						</Tooltip>
					))}
				{import.meta.env.NSP_LANGUAGE == "true" && (
					<Dropdown
						menu={{
							items: LanguageDropdownMenus,
							onClick: handleLanguageMenuClick,
						}}
						placement={"bottomRight"}
					>
						<Button icon={<TranslationOutlined />} />
					</Dropdown>
				)}
				<Button
					icon={<GithubOutlined />}
					href={"https://github.com/nextstarproject/tools-fe"}
					target={"_blank"}
					rel={"nofollow noreferrer noopener"}
				/>
			</Space>
		</div>
	);
};
export default LayoutHeaderRight;