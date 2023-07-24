import { setLastBreadcrumb } from "@project-self/layouts/rtk/layout-slice";
import { useAppDispatch } from "@project-self/store/store";
import { useEffect } from "react";

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
	}, [dispatch]);
	return (
		<div>
			<p>TagDetail</p>
		</div>
	);
};

export default TagDetail;
