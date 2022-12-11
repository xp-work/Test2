import React from "react";
import { selectBreadcrumbTitle } from "@project-self/selector/selector";
import { Breadcrumb, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "@project-self/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { selectLayoutMenus } from "@project-self/layout/selector";
import { useCallback } from "react";
import { map, forEach } from "lodash";
import { MenuItem } from "@project-self/layout/rkt";
import { DefaultRouteBreadcrumb } from "@project-self/assets/consts";
import useUrls from "@project-self/hooks/useUrls";
import { FindNameByUrl } from "@project-self/layout/utils";

const BreadcrumbSub = () => {
    const lastBreadcrumbTitle = useAppSelector(selectBreadcrumbTitle);
    const menus = useSelector(selectLayoutMenus);
    const urls = useUrls();

    const extraBreadcrumbItems = useCallback(() => {
        const list: JSX.Element[] = [];
        list.push(
            <Breadcrumb.Item key={"/dashboard"}>
                <Link to="/dashboard">首页</Link>
            </Breadcrumb.Item>
        );
        forEach(urls, (url, index) => {
            if (url == "/dashboard") {
                return;
            }
            if (menus != null) {
                const allMenu = menus as MenuItem[];
                const name = FindNameByUrl(allMenu, url);
                if (name != null) {
                    list.push(
                        <Breadcrumb.Item key={url}>
                            <Link to={url}>{name}</Link>
                        </Breadcrumb.Item>
                    );
                }
            }
            const result = DefaultRouteBreadcrumb[url];
            if (result != undefined) {
                list.push(
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>{result}</Link>
                    </Breadcrumb.Item>
                );
            }
        });
        return list;
    }, [menus, urls]);

    // 新版有问题->类型
    // const breadcrumbItem = useCallback(():MenuProps[] => {
    //     const list: MenuProps[] = [];
    //     list.push({
    //         label: <Link to="/dashboard">首页</Link>,
    //         key: '/dashboard',
    //     });
    //     var routerItems = urls.map((url, index) => {
    //         if (url == '/dashboard') {
    //             return;
    //         }
    //         if (menus != null) {
    //             const allMenu = menus as MenuItem[];
    //             const name = FindNameByUrl(allMenu, url);
    //             if (name != null) {
    //                 list.push({
    //                     label:
    //                         url == null ? name : <Link to={url}>{name}</Link>,
    //                     key: url,
    //                 });
    //             }
    //         }
    //         const result = DefaultRouteBreadcrumb[url];
    //         if (result != undefined) {
    //             list.push({
    //                 label:
    //                     url == null ? result : <Link to={url}>{result}</Link>,
    //                 key: url,
    //             });
    //         }
    //     });
    //     return list;
    // }, [menus, urls]);

    return (
        <Breadcrumb>
            {map(extraBreadcrumbItems(), (x) => {
                if (x == undefined) {
                    return null;
                }
                return x;
            })}
            {lastBreadcrumbTitle != null && (
                <Breadcrumb.Item>
                    <span>{lastBreadcrumbTitle}</span>
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
};

export default BreadcrumbSub;
