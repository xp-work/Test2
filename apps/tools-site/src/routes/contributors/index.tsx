import { useEffect, useState } from "react";
import { ContributorItem, getContributorList } from "./service";

const Contributors = () => {
	const [list, setList] = useState<ContributorItem[]>();
	useEffect(() => {
		const init = async () => {
			const data = await getContributorList();
			setList(data);
			console.log(data);
		};
		//init();
	}, []);
	return <section></section>;
};

export default Contributors;
