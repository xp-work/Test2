//提供AppDispatch接口,解决原生dispatch不能返回promise的问题
//https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import store from "@project-self/stores/store";
import { RootState } from "@project-self/stores";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
