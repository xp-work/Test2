import { toUpper } from "lodash";
import * as uuid from "uuid";

export enum GuidType {
    v1 = "Guid V1",
    v4 = "Guid V4",
}

export enum UuidGeneratorFormat {
    /* 大写 */
    Uppercase = 1 << 0,
    /* 有大括号 */
    Braces = 1 << 1,
    /* 无连字符 */
    Hyphens = 1 << 2,
}

export const UuidFormatExecute = (val: string, format: number): string => {
    if (
        (format & UuidGeneratorFormat.Uppercase) ==
        UuidGeneratorFormat.Uppercase
    ) {
        val = toUpper(val);
    }
    if ((format & UuidGeneratorFormat.Braces) == UuidGeneratorFormat.Braces) {
        val = "{" + val + "}";
    }
    if ((format & UuidGeneratorFormat.Hyphens) == UuidGeneratorFormat.Hyphens) {
        val = val.replaceAll("-", "");
    }
    return val;
};

export const UuidGenerator = (type: GuidType, format: number): string => {
    switch (type) {
        case GuidType.v1:
            return UuidFormatExecute(uuid.v1(), format);
        case GuidType.v4:
            return UuidFormatExecute(uuid.v4(), format);
        default:
            return UuidFormatExecute(
                "00000000-0000-0000-0000-000000000000",
                format
            );
    }
};
