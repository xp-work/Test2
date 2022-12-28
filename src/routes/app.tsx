import useLoginCheck from "@project-self/utils/auth/use-login-check";
import { getAppRoutes } from "@project-self/routes/app-routes";
import { useLocation, useRoutes } from "react-router-dom";
import { getLoginStatus } from "@project-self/utils/env-detect";
import { useEffect } from "react";

const App = () => {
    const location = useLocation();
    let isLoggedIn: boolean;
    if (getLoginStatus()) {
        isLoggedIn = useLoginCheck();
    } else {
        isLoggedIn = true;
    }
    useEffect(() => {
        // Google Analytics
        if (window.gtag != undefined) {
            window.gtag("event", "page_path_change", {
                path: location.pathname,
            });
        }
    }, [location]);
    const routes = useRoutes(getAppRoutes({ isLoggedIn }));
    return routes;
};

export default App;
