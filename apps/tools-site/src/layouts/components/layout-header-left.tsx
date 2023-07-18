import { Button, theme } from "antd";
import { DynamicAntIcon } from "@project-self/components/dynamic-icon/dynamic-icon";
import { ReactComponent as NsLogo } from "@project-self/assets/ns-logo.svg";
import { Link } from "react-router-dom";

const LayoutHeaderLeft = () => {
	const {
		token: { colorPrimary },
	} = theme.useToken();
	return (
		<div className={"flex flex-row items-center flex-1 h-full"}>
			<Button icon={<DynamicAntIcon type={"nsp-menu-application"} />} />
			<Link
				to={"/"}
				className={
					"flex w-48 mx-4 h-12 rounded transition-all ease-in-out duration-300 hover:bg-gray-300 dark:hover:bg-slate-800"
				}
			>
				<NsLogo
					className={"w-full"}
					style={{ color: colorPrimary, backgroundColor: "transparent" }}
				/>
			</Link>
		</div>
	);
};

export default LayoutHeaderLeft;
