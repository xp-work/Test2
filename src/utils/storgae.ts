import store from "store2";
import { ProjectName } from "@project-self/assets/consts";
export const nsLocalStorage = store.local.namespace(ProjectName);
export const nsSessionStorage = store.session.namespace(ProjectName);
