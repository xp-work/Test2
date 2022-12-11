import { nsLocalStorage } from "../storgae";
import { AccessTokenKey } from "@project-self/assets/consts";

export const saveToken = (accessToken: string) => {
    if (!accessToken) {
        return;
    }
    nsLocalStorage.set(AccessTokenKey, accessToken);
};

export const removeToken = () => {
    nsLocalStorage.remove(AccessTokenKey);
};

export const getToken = (): string | undefined => {
    return nsLocalStorage.get(AccessTokenKey);
};
