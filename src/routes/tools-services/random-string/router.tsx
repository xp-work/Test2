import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const RandomStringLazy = React.lazy(() => import("./random-string"));

const RandomStringRouter: AppRouteObject = {
    path: "/generate/random-string",
    element: <LazyImportComponent lazyChildren={RandomStringLazy} />,
    permission: [],
};

export default RandomStringRouter;
