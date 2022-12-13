import { toUpper } from "lodash";
import * as uuid from "uuid";

export enum GuidType {
    v1 = "Guid V1",
    v4 = "Guid V4",
}

export enum GuidGeneratorFormat {
    /* 大写 */
    Uppercase = 1 << 0,
    /* 有大括号 */
    Braces = 1 << 1,
    /* 无连字符 */
    Hyphens = 1 << 2,
}

export const GuidFormatExecute = (val: string, format: number): string => {
    if (
        (format & GuidGeneratorFormat.Uppercase) ==
        GuidGeneratorFormat.Uppercase
    ) {
        val = toUpper(val);
    }
    if ((format & GuidGeneratorFormat.Braces) == GuidGeneratorFormat.Braces) {
        val = "{" + val + "}";
    }
    if ((format & GuidGeneratorFormat.Hyphens) == GuidGeneratorFormat.Hyphens) {
        val = val.replaceAll("-", "");
    }
    return val;
};

export const GuidGenerator = (type: GuidType, format: number): string => {
    switch (type) {
        case GuidType.v1:
            return GuidFormatExecute(uuid.v1(), format);
        case GuidType.v4:
            return GuidFormatExecute(uuid.v4(), format);
        default:
            return GuidFormatExecute(
                "00000000-0000-0000-0000-000000000000",
                format
            );
    }
};
