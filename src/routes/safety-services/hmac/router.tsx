import { AppRouteObject } from "@project-self/routes/app-routes";
import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
const HMACLazy = React.lazy(() => import("./hmac"));
const HMACRoutes: AppRouteObject = {
    path: "/safety/hmac",
    element: <LazyImportComponent lazyChildren={HMACLazy} />,
    permission: [],
};

export const HMACIdRoutes: AppRouteObject = {
    path: "/safety/hmac/:id",
    element: <LazyImportComponent lazyChildren={HMACLazy} />,
    permission: [],
};

export default HMACRoutes;
