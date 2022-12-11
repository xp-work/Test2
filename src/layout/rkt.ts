import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "@project-self/utils/logger";

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
            return [
                {
                    id: 0,
                    url: "/dashboard",
                    icon: "nsp-dashboard",
                    name: "仪表板",
                    subMenus: [],
                },
                {
                    id: 200010000,
                    url: null,
                    icon: "nsp-anquan",
                    name: "安全工具",
                    subMenus: [
                        {
                            id: 200010010,
                            url: "/safety/one-way-encryption",
                            icon: null,
                            name: "单向加密",
                            subMenus: null,
                        },
                        {
                            id: 200010020,
                            url: "/safety/hmac",
                            icon: null,
                            name: "HMAC",
                            subMenus: null,
                        },
                    ],
                },
                {
                    id: 200020000,
                    url: null,
                    icon: "nsp-mokuaishengchengqi",
                    name: "生成工具",
                    subMenus: [
                        {
                            id: 200020010,
                            url: "/generate/random-string",
                            icon: null,
                            name: "随机字符串",
                            subMenus: null,
                        },
                        {
                            id: 200020020,
                            url: "/generate/uuid",
                            icon: null,
                            name: "UUID",
                            subMenus: null,
                        },
                    ],
                },
            ];
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
