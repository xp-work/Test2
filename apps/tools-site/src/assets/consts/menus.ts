import { Languages } from "nsp-i18n";

export type MenuItemI18n = Record<Languages, string>;
export interface MenuItem {
	id: number;
	name: string;
	i18n?: MenuItemI18n | undefined;
	icon?: string;
	path: Nullable<string>;
	permission: Nullable<number[]>;
	/**
	 * 将会直接转为 a 标签链接 _blank rel:AHrefRelAllNo
	 * 有外部地址优先使用
	 */
	externalUrl?: string;
	children: Nullable<MenuItem[]>;
}

export const BusinessMenus: MenuItem[] = [
	{
		id: 100100,
		name: "Menu.Safety.Index",
		i18n: {
			"zh-CN": "安全工具",
			"en-US": "Safety",
		},
		icon: "nsp-dashboard",
		path: null,
		permission: null,
		children: [
			{
				id: 100101,
				name: "Menu.Safety.OneWayEncryption",
				i18n: {
					"zh-CN": "单向加密",
					"en-US": "OneWayEncryption",
				},
				icon: "nsp-dashboard",
				path: "/safety/one-way-encryption",
				permission: null,
				children: null,
			},
			{
				id: 100102,
				name: "Menu.Safety.HMAC",
				i18n: {
					"zh-CN": "HMAC",
					"en-US": "HMAC",
				},
				icon: "nsp-dashboard",
				path: "/safety/hmac",
				permission: null,
				children: null,
			},
			{
				id: 100103,
				name: "Menu.Safety.RSAUse",
				i18n: {
					"zh-CN": "RSA 使用",
					"en-US": "RSA Use",
				},
				icon: "nsp-dashboard",
				path: "/safety/rsa-use",
				permission: null,
				children: null,
			},
		],
	},
	{
		id: 100200,
		name: "Menu.Generate.Index",
		i18n: {
			"zh-CN": "生成工具",
			"en-US": "Generate",
		},
		icon: "nsp-dashboard",
		path: null,
		permission: null,
		children: [
			{
				id: 100201,
				name: "Menu.Generate.RandomString",
				i18n: {
					"zh-CN": "随机字符串",
					"en-US": "Random String",
				},
				icon: "nsp-dashboard",
				path: "/generate/random-string",
				permission: null,
				children: null,
			},
			{
				id: 100202,
				name: "Menu.Generate.GUID",
				i18n: {
					"zh-CN": "GUID",
					"en-US": "GUID",
				},
				icon: "nsp-dashboard",
				path: "/generate/guid",
				permission: null,
				children: null,
			},
			{
				id: 100203,
				name: "Menu.Generate.RSAGenerate",
				i18n: {
					"zh-CN": "RSA 生成",
					"en-US": "RSA Generate",
				},
				icon: "nsp-dashboard",
				path: "/generate/rsa-generate",
				permission: null,
				children: null,
			},
		],
	},
];

export const Menus: MenuItem[] = [
	{
		id: 100000,
		name: "Menu.Dashboard",
		i18n: {
			"zh-CN": "仪表板",
			"en-US": "Dashboard",
		},
		icon: "nsp-dashboard",
		path: "/dashboard",
		permission: null,
		children: null,
	},
	...BusinessMenus,
	{
		id: 100900,
		name: "Menu.About.Index",
		i18n: {
			"zh-CN": "关于",
			"en-US": "About",
		},
		icon: "nsp-about",
		path: null,
		permission: null,
		children: [
			{
				id: 100901,
				name: "Menu.About.Contributors",
				i18n: {
					"zh-CN": "贡献者",
					"en-US": "Contributors",
				},
				icon: "nsp-about",
				path: "/about/contributors",
				permission: null,
				children: null,
			},
			{
				id: 100902,
				name: "Menu.About.Github",
				i18n: {
					"zh-CN": "Github",
					"en-US": "Github",
				},
				icon: "nsp-GitHub",
				path: null,
				permission: null,
				children: null,
				externalUrl: "https://github.com/nextstarproject/tools-fe",
			},
		],
	},
];
