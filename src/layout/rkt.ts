import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "@project-self/utils/logger";
import { menuList } from "@project-self/assets/consts/menuList";

export type MenuItem = {
    id: number;
    url: Nullable<string>;
    icon: Nullable<string>;
    name: string;
    subMenus: Nullable<MenuItem[]>;
};

export type LayoutState = {
    menuStatus: boolean;
    menuList: Nullable<MenuItem[]>;
    permission: Nullable<number[]>;
};

const initialState: LayoutState = {
    menuStatus: false,
    menuList: null,
    permission: null,
};

export const getMenus = createAsyncThunk(
    "Layout/getMenus",
    async (): Promise<Nullable<MenuItem[]>> => {
        try {
            return menuList;
            // const result = await serviceApi<MenuItem[]>('nsm-template/menus', {
            //   method: 'get',
            // });
            // console.log(result.data.data);
            // return result.data.data ?? [];
        } catch (err) {
            Logger.LogWarning("Client Rtk", "getClientListAsync", err);
            return null;
        }
    }
);

export const getPermissions = createAsyncThunk(
    "Layout/getPermissions",
    async (): Promise<Nullable<number[]>> => {
        try {
            return [];
            // const result = await serviceApi<number[]>('nsm-template/permissions', {
            //   method: 'get',
            // });
            // console.log(result.data.data);
            // return result.data.data ?? [];
        } catch (err) {
            Logger.LogWarning("Client Rtk", "getClientListAsync", err);
            return null;
        }
    }
);

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        //#region menu status
        toggleLoading: (state: LayoutState) => {
            state.menuStatus = !state.menuStatus;
            return state;
        },
        closeLoading: (state: LayoutState) => {
            state.menuStatus = false;
            return state;
        },
        openLoading: (state: LayoutState) => {
            state.menuStatus = true;
            return state;
        },
        setLoading: (state: LayoutState, action: PayloadAction<boolean>) => {
            state.menuStatus = action.payload;
            return state;
        },
        //#endregion
    },
    extraReducers: (builder) => {
        builder.addCase(getMenus.fulfilled, (state, action) => {
            state.menuList = action.payload ?? initialState.menuList;
            return state;
        });
        builder.addCase(getPermissions.fulfilled, (state, action) => {
            state.permission = action.payload ?? initialState.permission;
            return state;
        });
    },
});

export const { toggleLoading, closeLoading, openLoading, setLoading } =
    layoutSlice.actions;

export default layoutSlice.reducer;
