import localStore from "store2";

export const localStorage = (namespace: string) => {
	const ns = localStore.local.namespace(namespace);
	ns.prototype.getItemType = function <T>(key: string): T {
		const result = ns.get(key);
		return result as T;
	};
	return ns;
};

export const sessionStorage = (namespace: string) => {
	return localStore.session.namespace(namespace);
};

export const getLocalStore = () => localStore;
