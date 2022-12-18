import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const UuidPageLazy = React.lazy(() => import("src/routes/tools-services/uuid-page/uuid-page"));

const UuidPageRouter: AppRouteObject = {
    path: "/generate/uuid",
    element: <LazyImportComponent lazyChildren={UuidPageLazy} />,
    permission: [],
};

export default UuidPageRouter;
