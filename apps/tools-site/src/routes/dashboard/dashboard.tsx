import { matchPath, useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();
	console.log(location.pathname);
	const match = matchPath("/safe/:tab", "/safe/hash");
	console.log(match);
	return (
		<section>
			<div>
				<p>Dashboard</p>
			</div>
		</section>
	);
};

export default Dashboard;
