import React from "react";
import { RouteObject } from "react-router-dom";
import SignOutCallback from "./sign-out-callback";

const SignOutCallbackRoute: RouteObject = {
    path: "/signoutcallback",
    element: <SignOutCallback />,
};

export default SignOutCallbackRoute;
