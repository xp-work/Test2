import DashboardReducer, {
    DashboardState,
} from "@project-self/routes/common-services/dashboard/rtk";
import { combineReducers } from "@reduxjs/toolkit";

export interface ICommonState {
    dashboard: DashboardState;
}

export default combineReducers<ICommonState>({
    dashboard: DashboardReducer,
});
