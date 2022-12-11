import React from "react";
import { Layout, Menu, Skeleton } from "antd";
import { Link } from "react-router-dom";
import {
    useAppDispatch,
    useAppSelector,
} from "@project-self/hooks/useAppDispatch";
import {
    selectLayoutMenus,
    selectLayoutMenuStatus,
} from "@project-self/layout/selector";
import { useCallback, useEffect, useState } from "react";
import { getMenus, MenuItem } from "@project-self/layout/rkt";
import { union, map, difference, intersection } from "lodash";
import useUrls from "@project-self/hooks/useUrls";
import { ItemType } from "antd/es/menu/hooks/useItems";
import {
    FindOpenIdsByUrls,
    FindSelectIdsByUrls,
} from "@project-self/layout/utils";
import DynamicIcon from "@project-self/components/dynmaic-icon/dynamic-icon";
const { Sider } = Layout;

const buildMenuItem = (menus: MenuItem): ItemType => {
    if (menus.subMenus == null || menus.subMenus.length == 0) {
        return {
            label:
                menus.url == null ? (
                    menus.name
                ) : (
                    <Link to={menus.url}>{menus.name}</Link>
                ),
            key: menus.id,
            icon:
                menus.icon == null ? null : (
                    <DynamicIcon type={menus.icon} className={"w-4 h-4"} />
                ),
        };
    } else {
        return {
            label:
                menus.url == null ? (
                    menus.name
                ) : (
                    <Link to={menus.url}>{menus.name}</Link>
                ),
            key: menus.id,
            icon:
                menus.icon == null ? null : (
                    <DynamicIcon type={menus.icon} className={"w-4 h-4"} />
                ),
            children: map(menus.subMenus, buildMenuItem),
        };
    }
};

const LeftSider = () => {
    const menuStatus = useAppSelector(selectLayoutMenuStatus);
    const menus = useAppSelector(selectLayoutMenus);
    const dispatch = useAppDispatch();
    const urls = useUrls();
    const [selectMenuKeys, setSelectMenuKeys] = useState<string[]>([]);
    const [openMenuKeys, setOpenMenuKeys] = useState<string[]>([]);
    useEffect(() => {
        const init = async function () {
            await dispatch(getMenus());
        };
        init();
    }, []);

    useEffect(() => {
        setSelectMenuKeys(FindSelectIdsByUrls(menus, urls));
        const [_t, openKeys] = FindOpenIdsByUrls(menus, urls);
        if (openKeys.length > 0) {
            setOpenMenuKeys(union(openKeys, openMenuKeys));
        }

        // setOpenMenuKeys(_.union(openMenuKeys, openKeys));
    }, [menus, urls]);

    const buildMenus = useCallback(() => {
        if (menus == null) return [];
        const menuList: ItemType[] = map(menus, buildMenuItem);
        return menuList;
    }, [menus]);
    return (
        <Sider
            className="flex-none overflow-y-auto scrollBar"
            trigger={null}
            collapsible
            collapsed={menuStatus}
            theme={"light"}
        >
            {menus == null ? (
                <Skeleton active />
            ) : (
                <Menu
                    className="h-full"
                    mode="inline"
                    selectedKeys={selectMenuKeys}
                    openKeys={openMenuKeys}
                    onOpenChange={(e) => {
                        const a = intersection(openMenuKeys, e);
                        const b = difference(e, openMenuKeys);
                        if (openMenuKeys.length == 0) {
                            setOpenMenuKeys(e);
                        } else {
                            setOpenMenuKeys(a.concat(b));
                        }
                    }}
                    items={buildMenus()}
                />
            )}
        </Sider>
    );
};

export default LeftSider;
