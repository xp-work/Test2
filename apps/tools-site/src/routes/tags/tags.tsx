import { Outlet, matchPath, useLocation } from "react-router-dom";

const Tags = () => {
	return (
		<section>
			<div>
				<p>Tags</p>
				<Outlet />
			</div>
		</section>
	);
};

export default Tags;
