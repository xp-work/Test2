import localStore from "store2";
import { ProjectName } from "@project-self/assets/consts/global-consts";

export const nsLocalStorage = localStore.local.namespace(ProjectName);
export const nsSessionStorage = localStore.session.namespace(ProjectName);

export { localStore };
