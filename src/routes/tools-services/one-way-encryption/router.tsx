import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const OneWayEncryption = React.lazy(() => import("./one-way-encryption"));

const OneWayEncryptionRouter: AppRouteObject = {
    path: "/safety/one-way-encryption",
    element: <LazyImportComponent lazyChildren={OneWayEncryption} />,
    permission: [],
};

export default OneWayEncryptionRouter;
