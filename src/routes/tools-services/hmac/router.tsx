import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const Hmac = React.lazy(() => import("./hmac"));

const HmacRouter: AppRouteObject = {
    path: "/safety/hmac",
    element: <LazyImportComponent lazyChildren={Hmac} />,
    permission: [],
};

export default HmacRouter;
