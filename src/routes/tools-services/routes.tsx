import { AppRouteObject } from "../app-routes";
import HmacRouter from "./hmac/router";
import OneWayEncryptionRouter from "./one-way-encryption/router";
import RandomStringRouter from "./random-string/router";
import GuidPageRouter from "./guid-page/router";

export const ToolsServices: AppRouteObject[] = [
    HmacRouter,
    OneWayEncryptionRouter,
    RandomStringRouter,
    GuidPageRouter
];
