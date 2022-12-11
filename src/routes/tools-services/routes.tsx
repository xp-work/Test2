import { AppRouteObject } from "../app-routes";
import HmacRouter from "./hmac/router";
import OneWayEncryptionRouter from "./one-way-encryption/router";

export const ToolsServices: AppRouteObject[] = [
    HmacRouter,
    OneWayEncryptionRouter,
];
