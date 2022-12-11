import React from "react";
import { RouteObject } from "react-router-dom";
import SignInCallback from "./sign-in-callback";

const SignInCallbackRoute: RouteObject = {
    path: "/signincallback",
    element: <SignInCallback />,
};

export default SignInCallbackRoute;
