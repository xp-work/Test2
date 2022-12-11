import { useLocation } from "react-router-dom";
import { DependencyList, EffectCallback, useEffect, useState } from "react";
import { useAppSelector } from "@project-self/hooks/useAppDispatch";
import { selectGlobalFirstRender } from "@project-self/selector/selector";

/**
 * 无法在组件卸载时触发卸载函数，如果需要卸载函数，请单独使用 useEffect , deps 内部含有一个依赖
 * @param effect 参考 useEffect 参数
 * @param deps 参考 useEffect 参数
 */
export default function useEffectBeforeFirstRender(
    effect: EffectCallback,
    deps?: DependencyList
) {
    const isFirstRender = useAppSelector(selectGlobalFirstRender);
    if (deps == undefined) {
        useEffect(() => {
            if (isFirstRender) {
                effect();
            }
        }, [isFirstRender]);
    } else {
        useEffect(() => {
            if (isFirstRender) {
                effect();
            }
        }, [isFirstRender, ...deps]);
    }
}
