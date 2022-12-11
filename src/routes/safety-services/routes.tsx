import OneWayEncryptionRoutes from "@project-self/routes/safety-services/one-way-encryption/router";
import { AppRouteObject } from "@project-self/routes/app-routes";
import HMACRoutes, {
    HMACIdRoutes,
} from "@project-self/routes/safety-services/hmac/router";

export const SafetyServiceRoutes: AppRouteObject[] = [
    OneWayEncryptionRoutes,
    HMACRoutes,
    HMACIdRoutes,
];
