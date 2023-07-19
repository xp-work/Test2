import { selectGlobalState, selectLayoutState } from "@project-self/store/selector";
import { useAppDispatch, useAppSelector } from "@project-self/store/store";
import { setApplicationDrawer } from "../rtk/layout-slice";
import { Col, Drawer, Row } from "antd";
import { DynamicAntIcon } from "@project-self/components/dynamic-icon/dynamic-icon";
import { AntCloudOutlined } from "@ant-design/icons";

interface ApplicationItem {
	id: number;
	name: string;
	target: string;
	url: string;
	icon: string;
}

const applications: ApplicationItem[] = [
	{
		id: 100000,
		name: "Github",
		target: "_blank",
		url: "https://github.com",
		icon: "nsp-save",
	},
	{
		id: 100001,
		name: "Github",
		target: "_blank",
		url: "https://github.com",
		icon: "nsp-save",
	},
	{
		id: 100002,
		name: "Github",
		target: "_blank",
		url: "https://github.com",
		icon: "nsp-save",
	},
	{
		id: 100003,
		name: "Github",
		target: "_blank",
		url: "https://github.com",
		icon: "nsp-save",
	},
	{
		id: 100004,
		name: "Github123333333333333",
		target: "_blank",
		url: "https://github.com",
		icon: "nsp-save",
	},
];

const LayoutApplicationDrawer = () => {
	const dispatch = useAppDispatch();
	const layoutState = useAppSelector(selectLayoutState);
	const globalState = useAppSelector(selectGlobalState);
	const onClose = () => {
		dispatch(setApplicationDrawer(false));
	};
	return (
		<Drawer
			title={"123213"}
			placement="left"
			onClose={onClose}
			width={4 * 120}
			closeIcon={<DynamicAntIcon type={"nsp-menu-application"} />}
			open={layoutState.applicationDrawer}
		>
			<Row gutter={[24, 16]}>
				{applications.map((x) => (
					<Col span={12} key={x.id} className="h-12">
						<div
							className="box-border h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-purple-500 hover:to-pink-500 rounded"
							style={{ padding: "1px" }}
						>
							<a
								href={x.url}
								target={x.target}
								className={`${
									globalState.theme.isDark ? "bg-slate-800" : "bg-white"
								} box-border flex justify-items-start justify-between content-center items-center self-center h-full w-full rounded p-2 text-blue-500 hover:text-purple-500`}
							>
								<DynamicAntIcon type={x.icon} className="text-2xl" />
								<span className="flex-1 grow mx-2 text-left whitespace-nowrap overflow-hidden text-ellipsis">
									{x.name}
								</span>
								<DynamicAntIcon type="nsp-fullscreen-expand" className="text-2xl" />
							</a>
						</div>
					</Col>
				))}
			</Row>
		</Drawer>
	);
};

export default LayoutApplicationDrawer;
