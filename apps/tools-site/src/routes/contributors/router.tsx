import { AppRouteObject } from "@project-self/routes/routes";
import Contributors from "@project-self/routes/contributors/index";

const ContributorsRouter: AppRouteObject = {
	title: "Route.Contributors",
	path: "/contributors",
	element: <Contributors />,
	permission: [],
};

export default ContributorsRouter;
