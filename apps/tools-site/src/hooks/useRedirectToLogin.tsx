import { useDebounceFn } from "ahooks";
import { useNavigate } from "react-router-dom";

const useRedirectToLogin = (loginPath?: string) => {
	const path = loginPath || "/login";
	const navigate = useNavigate();

	return () => {
		navigate(path);
	};
};

export default useRedirectToLogin;
