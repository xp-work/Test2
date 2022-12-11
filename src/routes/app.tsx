import useLoginCheck from "@project-self/utils/auth/use-login-check";
import { getAppRoutes } from "@project-self/routes/app-routes";
import { useRoutes } from "react-router-dom";
import { getLoginStatus } from "@project-self/utils/env-detect";

const App = () => {
    let isLoggedIn: boolean;
    if (getLoginStatus()) {
        isLoggedIn = useLoginCheck();
    } else {
        isLoggedIn = true;
    }
    const routes = useRoutes(getAppRoutes({ isLoggedIn }));
    return routes;
};

export default App;
