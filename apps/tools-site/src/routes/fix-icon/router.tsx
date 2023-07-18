import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import React from "react";
import { AppRouteObject } from "@project-self/routes/routes";

const FixIconLazy = React.lazy(() => import("@project-self/routes/fix-icon/fix-icon"));

const FixIconRouter: AppRouteObject = {
	path: "/common/fix-icon",
	element: <LazyImportComponent lazyChildren={FixIconLazy} />,
	permission: [],
};

export default FixIconRouter;
