import { noop } from "lodash";
import React from "react";

type DynamicIconProps = {
    type: string;
    style?: React.CSSProperties;
    className?: string;
    onClick?: (e?: any) => void;
    onMouseEnter?: (e?: any) => void;
    onMouseLeave?: (e?: any) => void;
    onFocus?: (e?: any) => void;
};

/**
 * This component can be used to infer Icon from iconfont.com
 * @param props
 * @returns
 */
const DynamicIcon = (props: DynamicIconProps): JSX.Element => {
    const {
        type,
        style = {},
        className = "",
        onClick = noop,
        onMouseEnter = noop,
        onMouseLeave = noop,
        onFocus = noop,
    } = props;

    return (
        <svg
            style={style}
            className={`icon inline-block ${className}`}
            aria-hidden
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
        >
            <use xlinkHref={`#${type}`} />
        </svg>
    );
};

export default DynamicIcon;
