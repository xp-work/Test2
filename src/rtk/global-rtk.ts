import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeColor = {
    colorPrimary: string;
    colorSuccess: string;
    colorWarning: string;
    colorError: string;
};
/**
 * getMenus
 * getPermissions
 */
const allFirstRenderNum = 2;
export type GlobalState = {
    breadcrumbLastTitle: Nullable<string>;
    loading: boolean;
    themeColor: ThemeColor;
    firstRenderNum: number;
    isFinishFirstRender: boolean;
};
const message = "正在编辑中，是否退出？";

const initialState: GlobalState = {
    breadcrumbLastTitle: null,
    loading: false,
    themeColor: {
        colorPrimary: "#13c2c2",
        colorSuccess: "#00d602",
        colorWarning: "#ffc700",
        colorError: "#f5222d",
    },
    firstRenderNum: 0,
    isFinishFirstRender: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setBreadcrumbLastTitle: (
            state: GlobalState,
            action: PayloadAction<string>
        ) => {
            state.breadcrumbLastTitle = action.payload;
            return state;
        },
        clearBreadcrumbLastTitle: (state: GlobalState) => {
            state.breadcrumbLastTitle = null;
            return state;
        },
        //#region Loading
        toggleLoading: (state: GlobalState) => {
            state.loading = !state.loading;
            return state;
        },
        closeLoading: (state: GlobalState) => {
            state.loading = false;
            return state;
        },
        openLoading: (state: GlobalState) => {
            state.loading = true;
            return state;
        },
        setLoading: (state: GlobalState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            return state;
        },
        IncreasesRender: (state: GlobalState) => {
            const result = state.firstRenderNum + 1;
            state.firstRenderNum = result;
            if (result >= allFirstRenderNum) {
                state.isFinishFirstRender = true;
            }
            return state;
        },
        //#endregion
    },
});

export const {
    setBreadcrumbLastTitle,
    clearBreadcrumbLastTitle,
    IncreasesRender,
} = globalSlice.actions;

export default globalSlice.reducer;
