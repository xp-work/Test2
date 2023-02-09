import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const RsaUseLazy = React.lazy(
    () => import("src/routes/tools-services/rsa-use/rsa-use")
);

const RsaUseRouter: AppRouteObject = {
    path: "/safety/rsa-use",
    element: <LazyImportComponent lazyChildren={RsaUseLazy} />,
    permission: [],
};

export default RsaUseRouter;
