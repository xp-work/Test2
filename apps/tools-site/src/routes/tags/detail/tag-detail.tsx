import { setLastBreadcrumb } from "@project-self/layouts/rtk/layout-slice";
import { useAppDispatch } from "@project-self/store/store";
import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

const TagDetail = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(
			setLastBreadcrumb({
				replace: false,
				title: "测试",
			})
		);
		return function cleanup() {
			dispatch(setLastBreadcrumb(undefined));
		};
	}, []);
	return (
		<div>
			<p>TagDetail</p>
		</div>
	);
};

export default TagDetail;
