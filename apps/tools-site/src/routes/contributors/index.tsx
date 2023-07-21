import { useCallback, useEffect, useState } from "react";
import { getContributorList } from "./rtk/service";
import { useAppDispatch, useAppSelector } from "@project-self/store/store";
import { selectContributorsState } from "./rtk/selector";
import { Avatar, Badge, Col, Row, Skeleton, theme } from "antd";
import { AHrefRelAllNo } from "@project-self/assets/consts/html-tag-consts";

const Contributors = () => {
	const contributorsState = useAppSelector(selectContributorsState);
	const [skeletonActive, setSkeletonActive] = useState(true);
	const dispatch = useAppDispatch();
	const {
		token: { colorText, colorBorder, colorBgContainer },
	} = theme.useToken();
	useEffect(() => {
		const init = async () => {
			if (contributorsState.userList.length == 0) {
				await dispatch(getContributorList());
			}
			setSkeletonActive(false);
		};
		init();
	}, []);

	const renderUserList = useCallback(() => {
		return (
			<Row gutter={[16, 8]} className="mt-6">
				{contributorsState.userList.map((x) => (
					<Col key={x.id} span={6} xl={4}>
						<a
							href={x.html_url}
							className={"flex items-center py-3 px-1 border-solid border rounded"}
							style={{
								borderColor: colorBorder,
								backgroundColor: colorBgContainer,
							}}
							rel={AHrefRelAllNo}
							target={"_blank"}
						>
							<Badge count={x.contributions} overflowCount={999}>
								<Avatar
									shape="square"
									alt={x.login}
									src={x.avatar_url}
									size={"large"}
								/>
							</Badge>
							<span
								className="flex-1 grow mx-2 text-left whitespace-nowrap overflow-hidden text-ellipsis"
								style={{ color: colorText }}
							>
								{x.login}
							</span>
						</a>
					</Col>
				))}
			</Row>
		);
	}, [contributorsState.userList, colorText]);
	return (
		<section>
			{skeletonActive && <Skeleton avatar={{ shape: "circle", size: "default" }} active />}
			{!skeletonActive && renderUserList()}
		</section>
	);
};

export default Contributors;
