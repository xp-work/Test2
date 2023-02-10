import { AppRouteObject } from "../app-routes";
import HmacRouter from "./hmac/router";
import OneWayEncryptionRouter from "./one-way-encryption/router";
import RandomStringRouter from "./random-string/router";
import UuidPageRouter from "./uuid-page/router";
import RsaGenerateRouter from "@project-self/routes/tools-services/rsa/rsa-generate/router";
import RsaUseRouter from "@project-self/routes/tools-services/rsa/rsa-use/router";
import ContributorsRouter from "./contributors/router";

export const ToolsServices: AppRouteObject[] = [
    HmacRouter,
    OneWayEncryptionRouter,
    RandomStringRouter,
    UuidPageRouter,
    RsaGenerateRouter,
    RsaUseRouter,
    ContributorsRouter,
];
