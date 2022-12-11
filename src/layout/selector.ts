import { Selector } from "react-redux";
import { MenuItem } from "@project-self/layout/rkt";
import { RootState } from "@project-self/stores";

export const selectLayoutMenuStatus: Selector<RootState, boolean> = (state) =>
    state.layout.menuStatus;

export const selectLayoutMenus: Selector<RootState, Nullable<MenuItem[]>> = (
    state
) => state.layout.menuList;

export const selectLayoutPermissions: Selector<
    RootState,
    Nullable<number[]>
> = (state) => state.layout.permission;
