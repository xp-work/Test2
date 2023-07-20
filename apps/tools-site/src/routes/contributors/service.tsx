import { githubServiceApi } from "@project-self/utils/service-api";

export type ContributorItem = {
	login: string;
	id: number;
	avatar_url: string;
	html_url: string;
};

export const getContributorList = async (): Promise<ContributorItem[]> => {
	try {
		const result = await githubServiceApi<ContributorItem[]>(
			"/repos/nextstarproject/tools-fe/contributors",
			{
				method: "get",
			}
		);
		if (result.status == 200) {
			return Promise.resolve(result.data);
		}
		return Promise.reject([]);
	} catch (e) {
		return Promise.reject([]);
	}
};
