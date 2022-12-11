import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { Profile } from "oidc-client";
import { UserState } from "redux-oidc";
import { AsyncStatus } from "@project-self/types/async-status";
import { RootState } from "@project-self/stores";

export type ProfileExtend = Profile & {
    userrole?: string;
    emailaddr?: string;
    photo?: string;
};

export type IAuthState = {
    loginStatus: AsyncStatus;
    logoutStatus: AsyncStatus;
};

/** select state from store.. */
export const selectOidc: Selector<RootState, UserState> = (state) => state.oidc;
export const selectAuthState: Selector<RootState, IAuthState> = (state) => ({
    loginStatus: state.oidc.loginStatus || AsyncStatus.None,
    logoutStatus: state.oidc.logoutStatus || AsyncStatus.None,
});
export const selectProfile: Selector<RootState, ProfileExtend | undefined> = (
    state
) => state.oidc.user?.profile as ProfileExtend;

export const oidcExtendSlice = createSlice({
    name: "oidcExtend",
    initialState: {
        logoutStatus: AsyncStatus.None,
        loginStatus: AsyncStatus.None,
    },
    reducers: {
        changeLogoutStatus: (state, action: PayloadAction<AsyncStatus>) => {
            state.logoutStatus = action.payload;
        },
        changeLoginStatus: (state, action: PayloadAction<AsyncStatus>) => {
            state.loginStatus = action.payload;
        },
    },
});

export const { changeLogoutStatus, changeLoginStatus } =
    oidcExtendSlice.actions;

export default oidcExtendSlice.reducer;
