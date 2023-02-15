import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const VersionChangesPageLazy = React.lazy(() => import("./version-changes"));

const VersionChangesPageRouter: AppRouteObject = {
    path: "/changes",
    element: <LazyImportComponent lazyChildren={VersionChangesPageLazy} />,
    permission: [],
};

export default VersionChangesPageRouter;
