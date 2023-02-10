/**
 * !please append your page routes here
 *
 * if the page accessibility controlled by the server(same as left side menu), please add it in the
 * withPermissionPageRoutes array.
 * or please add it in the
 * withoutPermissionPageRoutes.
 * thank you.
 *
 */
import React from "react";
import { RouteObject } from "react-router-dom";
import SignInCallbackRoute from "@project-self/routes/public-services/sign-in-callback/router";
import SignOutCallbackRoute from "@project-self/routes/public-services/sign-out-callback/router";
import NotFoundRoutes from "@project-self/routes/public-services/not-found/router";
import {
    DashboardRouter,
    HomeRouter,
} from "@project-self/routes/common-services/dashboard/router";
import { getLoginStatus } from "@project-self/utils/env-detect";
import LayoutConfig from "@project-self/layout/layout-config";
import { ToolsServices } from "./tools-services/routes";

export type AppRouteObject = RouteObject & {
    permission: number[];
};

/**
 * !please append your page routes here
 *
 * if the page accessibility controlled by the server(same as left side menu), please add it in the
 * withPermissionPageRoutes array.
 * or please add it in the
 * withoutPermissionPageRoutes.
 * thank you.
 *
 */
const withPermissionPageRoutes: AppRouteObject[] = [
    ...ToolsServices,
    // MasterRoutes,
    // MasterDetailRoutes,
];

export const withoutPermissionPageRoutes: AppRouteObject[] = [
    HomeRouter,
    DashboardRouter,
];

const PublicWithoutLayoutRoutes: RouteObject[] = getLoginStatus()
    ? [SignInCallbackRoute, SignOutCallbackRoute]
    : [];

export const PrivatePageRoutes = withPermissionPageRoutes.concat(
    withoutPermissionPageRoutes
);

/* ! DON'T APPEND ROUTES CONFIG HERE, PLEASE MODIFY PublicRoutes or PrivatePageRoutes */
/**
 * if logged in, use the PrivatePageRoutes routes.
 * if not log in, use the PublicRoutes routes.
 * when you in some page, and refresh the page,
 * the variable isLoggedIn do not determine, so it's false.
 * but the PublicRoutes do not have some routes, eg: /school
 * so after refresh the page, there is a while the routes do not have route defined /school,
 * the page will show 404. but the page actually has.
 *
 * if you use PrivatePageRoutes and isLoggedIn is false.
 * the pages in PrivatePageRoutes will fetch data from server.
 * because isLoggedIn is false, so in some situation it will redirect to login page, but it does not need.
 * transformRouteToPending will transform all routes with the defined path(route), but with <Pending /> element.
 * so there ara all routes here, and shows a loading page instead of fetching data from server.
 */
export const getAppRoutes = ({
    isLoggedIn,
}: {
    isLoggedIn: boolean;
}): RouteObject[] => {
    return isLoggedIn
        ? [
              ...PublicWithoutLayoutRoutes,
              {
                  element: <LayoutConfig />,
                  children: [...PrivatePageRoutes, NotFoundRoutes],
              },
              DashboardRouter,
          ]
        : [...PublicWithoutLayoutRoutes, ...PrivatePageRoutes, NotFoundRoutes];
};
