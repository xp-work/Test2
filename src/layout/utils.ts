import { MenuItem } from "@project-self/layout/rkt";
import { forEach, some, filter, concat } from "lodash";

export const FindSelectIdsByUrls = function (
    menus: Nullable<MenuItem[]>,
    urls: string[]
): string[] {
    if (menus == null) return [];
    let selectKeys: string[] = [];
    forEach(menus, (x) => {
        if (x.subMenus != null && x.subMenus.length > 0) {
            selectKeys = selectKeys.concat(
                FindSelectIdsByUrls(x.subMenus, urls)
            );
        }
        if (x.url != null) {
            if (urls.indexOf(x.url) >= 0) {
                selectKeys.push(x.id.toString());
            }
        }
    });
    return selectKeys;
};

export const FindNameByUrl = function (
    menus: Nullable<MenuItem[]>,
    url: string
): Nullable<string> {
    if (menus == null) return null;
    let name: Nullable<string> = null;
    forEach(menus, (x) => {
        if (x.subMenus != null && x.subMenus.length > 0) {
            name = FindNameByUrl(x.subMenus, url);
        }
        if (x.url != null) {
            if (url == x.url) {
                name = x.name;
            }
        }
    });
    return name;
};

export const FindOpenIdsByUrls = function (
    menus: Nullable<MenuItem[]>,
    urls: string[]
): [boolean, string[]] {
    if (menus == null) return [false, []];
    let openKeys: string[] = [];
    let exist = some(menus, (x) =>
        x.url == null ? false : urls.indexOf(x.url) >= 0
    );
    filter(menus, (x) => {
        if (x.subMenus != null && x.subMenus.length > 0) {
            const [isExist, tempIds] = FindOpenIdsByUrls(x.subMenus, urls);
            if (isExist) {
                exist = isExist;
                openKeys.push(x.id.toString());
                if (tempIds.length > 0) {
                    openKeys = concat(openKeys, tempIds);
                }
            }
        }
    });
    return [exist, openKeys];
};
