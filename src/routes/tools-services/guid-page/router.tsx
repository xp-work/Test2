import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const GuidPageLazy = React.lazy(() => import("./guid-page"));

const GuidPageRouter: AppRouteObject = {
    path: "/generate/guid",
    element: <LazyImportComponent lazyChildren={GuidPageLazy} />,
    permission: [],
};

export default GuidPageRouter;
