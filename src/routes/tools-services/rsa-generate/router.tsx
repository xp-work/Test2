import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
import { AppRouteObject } from "@project-self/routes/app-routes";

const RsaGenerateLazy = React.lazy(
    () => import("src/routes/tools-services/rsa-generate/rsa-generate")
);

const RsaGenerateRouter: AppRouteObject = {
    path: "/generate/rsa-generate",
    element: <LazyImportComponent lazyChildren={RsaGenerateLazy} />,
    permission: [],
};

export default RsaGenerateRouter;
