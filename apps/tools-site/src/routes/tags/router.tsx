import { AppRouteObject } from "@project-self/routes/routes";
import Tags from "@project-self/routes/tags/tags";
import TagDetail from "./detail/tag-detail";

const TagsRouter: AppRouteObject = {
	title: "Route.Tags",
	path: "tag",
	element: <Tags />,
	permission: [],
	children: [
		{
			title: "Route.TagDetail",
			path: ":id",
			element: <TagDetail />,
			permission: [],
		} as AppRouteObject,
	],
};

export default [TagsRouter];
