import React from "react";
import { RouteObject } from "react-router-dom";
import NotFound from "./not-found";

const NotFoundRoutes: RouteObject = {
    path: "*",
    element: <NotFound />,
};

export default NotFoundRoutes;
