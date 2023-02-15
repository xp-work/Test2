import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/app";
import "./main.scss";
import { OidcProvider } from "redux-oidc";
import { BrowserRouter } from "react-router-dom";
import { initDevHelper } from "./utils/dev-helper";
import { isDev, getRelativeBasePath } from "./utils/env-detect";
import { Provider } from "react-redux";
import store from "@project-self/stores/store";
import { userManager } from "@project-self/utils/auth/user-manager";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/zh";

import "./markdown.css";

dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);
dayjs.locale("zh-cn");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        {
            // @ts-expect-error type error
            <OidcProvider store={store} userManager={userManager}>
                <BrowserRouter basename={getRelativeBasePath()}>
                    <App />
                </BrowserRouter>
            </OidcProvider>
        }
    </Provider>
);

if (isDev) {
    initDevHelper(store);
}
