import { MenuItem } from "@project-self/layout/rkt";

export const menuList: MenuItem[] = [
    {
        id: 0,
        url: "/dashboard",
        icon: "nsp-dashboard",
        name: "仪表板",
        subMenus: [],
    },
    {
        id: 200010000,
        url: null,
        icon: "nsp-anquan",
        name: "安全工具",
        subMenus: [
            {
                id: 200010010,
                url: "/safety/one-way-encryption",
                icon: null,
                name: "单向加密",
                subMenus: null,
            },
            {
                id: 200010020,
                url: "/safety/hmac",
                icon: null,
                name: "HMAC",
                subMenus: null,
            },
        ],
    },
    {
        id: 200020000,
        url: null,
        icon: "nsp-mokuaishengchengqi",
        name: "生成工具",
        subMenus: [
            {
                id: 200020010,
                url: "/generate/random-string",
                icon: null,
                name: "随机字符串",
                subMenus: null,
            },
            {
                id: 200020020,
                url: "/generate/uuid",
                icon: null,
                name: "Guid",
                subMenus: null,
            },
        ],
    },
];
