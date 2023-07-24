import { theme } from "antd";

const Dashboard = () => {
	const {
		token: { colorText },
	} = theme.useToken();
	return (
		<section style={{ color: colorText }}>
			<div>
				<p>Dashboard</p>
			</div>
		</section>
	);
};

export default Dashboard;
