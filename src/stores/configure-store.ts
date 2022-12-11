import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { isDev } from "@project-self/utils/env-detect";
import { reducer as oidcReducer } from "redux-oidc";
import { oidcExtendSlice } from "@project-self/rtk/oidc";
import { extendReducer } from "@project-self/redux/extend-reducer";
import globalReducer from "@project-self/rtk/global-rtk";
import layoutReducer from "@project-self/layout/rkt";
import commonReducer from "@project-self/routes/common-services/rtk";

const rootReducer = combineReducers({
    oidc: extendReducer(oidcReducer, oidcExtendSlice.reducer),
    global: globalReducer,
    layout: layoutReducer,
    common: commonReducer,
});

export const getStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            const defaultMiddleware = getDefaultMiddleware({
                //close redux-toolkits serialize warning to redux-oidc state.
                //due to https://github.com/maxmantz/redux-oidc/issues/169
                //due to https://github.com/maxmantz/redux-oidc/issues/169#issuecomment-693474948
                serializableCheck: {
                    ignoredActions: ["redux-oidc/USER_FOUND"],
                    ignoredPaths: ["oidc.user"],
                },
            });
            if (isDev) {
                return defaultMiddleware.concat(logger);
            }
            return defaultMiddleware;
        },
        devTools: isDev,
        preloadedState: {},
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof getStore>;
export type AppDispatch = AppStore["dispatch"];
