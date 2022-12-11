import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLayoutPermissions } from "@project-self/layout/selector";

export default function useAccess(): { [key: string]: () => boolean } {
    const permissions = useSelector(selectLayoutPermissions);
    const hasPermissions = useCallback(() => {
        return {
            canRead: () => {
                return false;
            },
            canWrite: () => {
                return true;
            },
        };
    }, [permissions]);
    return hasPermissions();
}
