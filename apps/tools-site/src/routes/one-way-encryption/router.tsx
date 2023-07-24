import { AppRouteObject } from "@project-self/routes/routes";
import OneWayEncryption from "@project-self/routes/one-way-encryption/index";

const OneWayEncryptionRouter: AppRouteObject = {
	title: "Route.OneWayEncryption",
	path: "/safety/one-way-encryption",
	element: <OneWayEncryption />,
	permission: [],
};

export default OneWayEncryptionRouter;
