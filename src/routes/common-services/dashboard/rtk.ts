import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Logger from "@project-self/utils/logger";
import { serviceApi } from "@project-self/utils/service-api/service-api";

export type DashboardState = {
    dashboard: Nullable<string>;
};

const initialState: DashboardState = {
    dashboard: null,
};

export const getDashboard = createAsyncThunk(
    "Dashboard/getDashboard",
    async (): Promise<Nullable<string>> => {
        try {
            const result = await serviceApi<string>("nsm-template/dashboard", {
                method: "get",
            });
            return result.data.data ?? null;
        } catch (err) {
            Logger.LogWarning("Client Rtk", "getClientListAsync", err);
            return null;
        }
    }
);

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDashboard.fulfilled, (state, action) => {
            state.dashboard = action.payload ?? initialState.dashboard;
            return state;
        });
    },
});

export default dashboardSlice.reducer;
