import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useUrls(): string[] {
    const location = useLocation();
    const [urls, setUrls] = useState<string[]>([]);
    useEffect(() => {
        const pathSnippets = location.pathname.split("/").filter((i) => i);
        const urls = pathSnippets.map(
            (current, index) => `/${pathSnippets.slice(0, index + 1).join("/")}`
        );
        setUrls(urls);
    }, [location]);
    return urls;
}
