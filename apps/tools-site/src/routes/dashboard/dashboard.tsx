import { DynamicAntIcon } from "@project-self/components/dynamic-icon/dynamic-icon";
import { Col, Row, Space, theme, Typography } from "antd";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const {
		token: { colorText, colorBorder, colorBgContainer },
	} = theme.useToken();
	return (
		<section>
			<Typography>
				<Typography.Title level={3}>安全工具</Typography.Title>
				<Row gutter={[16, 8]} className="mt-6">
					<Col key={"one-way"} span={6} xl={4}>
						<Link
							className={"flex items-center py-3 px-1 border-solid border rounded"}
							style={{
								borderColor: colorBorder,
								backgroundColor: colorBgContainer,
							}}
							to={"/safet/one-way"}
						>
							<DynamicAntIcon type="nsp-dashboard" className={"text-2xl"} />
							<span
								className="flex-1 grow mx-2 text-left whitespace-nowrap overflow-hidden text-ellipsis"
								style={{ color: colorText }}
							>
								单向加密
							</span>
							<DynamicAntIcon type="nsp-share" className="text-2xl" />
						</Link>
					</Col>
				</Row>
			</Typography>
		</section>
	);
};

export default Dashboard;
