import { AppRouteObject } from "@project-self/routes/app-routes";
import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
const OneWayEncryptionLazy = React.lazy(() => import("./one-way-encryption"));
const OneWayEncryptionRoutes: AppRouteObject = {
    path: "/safety/one-way-encryption",
    element: <LazyImportComponent lazyChildren={OneWayEncryptionLazy} />,
    permission: [],
};

export default OneWayEncryptionRoutes;
