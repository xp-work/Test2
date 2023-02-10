import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const ContributorsLazy = React.lazy(
    () => import("src/routes/tools-services/contributors/contributors")
);

const ContributorsRouter: AppRouteObject = {
    path: "/contributors",
    element: <LazyImportComponent lazyChildren={ContributorsLazy} />,
    permission: [],
};

export default ContributorsRouter;
