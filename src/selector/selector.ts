import { ThemeColor } from "@project-self/rtk/global-rtk";
import { RootState } from "@project-self/stores";
import { Selector } from "react-redux";

export const selectBreadcrumbTitle: Selector<RootState, Nullable<string>> = (
    state
) => state.global.breadcrumbLastTitle;

export const selectGlobalLoading: Selector<RootState, boolean> = (state) =>
    state.global.loading;

export const selectGlobalFirstRender: Selector<RootState, boolean> = (state) =>
    state.global.isFinishFirstRender;

export const selectGlobalThemeColor: Selector<RootState, ThemeColor> = (state) =>
    state.global.themeColor;
