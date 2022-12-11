import { Navigate } from "react-router-dom";
import { AppRouteObject } from "@project-self/routes/app-routes";
import React from "react";
import { LazyImportComponent } from "@project-self/components/lazy-import-component";
const DashboardLazy = React.lazy(() => import("./dashboard"));
export const DashboardRouter: AppRouteObject = {
    path: "/dashboard",
    element: <LazyImportComponent lazyChildren={DashboardLazy} />,
    permission: [],
};

export const HomeRouter: AppRouteObject = {
    index: true,
    element: <Navigate to={"/dashboard"} replace />,
    permission: [],
};
