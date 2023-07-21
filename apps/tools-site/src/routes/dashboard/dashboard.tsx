import { theme } from "antd";
import { matchPath, useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();
	console.log(location.pathname);
	const match = matchPath("/safe/:tab", "/safe/hash");
	const {
		token: { colorText },
	} = theme.useToken();
	console.log(match);
	return (
		<section style={{ color: colorText }}>
			<div>
				<p>Dashboard</p>
			</div>
		</section>
	);
};

export default Dashboard;
