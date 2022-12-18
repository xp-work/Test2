import React from "react";
import useTabKey from "@project-self/hooks/useTabKey";
import { Tabs } from "antd";
import { RandomStringType } from "@project-self/routes/tools-services/random-string/types";
import RandomStringItem from "@project-self/routes/tools-services/random-string/components/random-string-item";
import { CryptoRandomStringCharacters } from "@project-self/routes/tools-services/random-string/utils";
import RandomStringCustom from "@project-self/routes/tools-services/random-string/components/random-string-custom";

const RandomString = () => {
    const [tabKey, setTabKey] = useTabKey(RandomStringType.UrlSafe);

    const handleTabSwitch = (key: string) => {
        setTabKey(key);
    };
    return (
        <section className={"h-full"}>
            <Tabs
                className={"h-full overflow-auto"}
                defaultActiveKey={tabKey}
                onChange={handleTabSwitch}
                items={[
                    {
                        label: RandomStringType.UrlSafe,
                        key: RandomStringType.UrlSafe,
                        children: (
                            <RandomStringItem
                                randomStringType={RandomStringType.UrlSafe}
                                characters={
                                    CryptoRandomStringCharacters.urlSafeCharacters
                                }
                            />
                        ),
                    },
                    {
                        label: RandomStringType.Numeric,
                        key: RandomStringType.Numeric,
                        children: (
                            <RandomStringItem
                                randomStringType={RandomStringType.Numeric}
                                characters={
                                    CryptoRandomStringCharacters.numericCharacters
                                }
                            />
                        ),
                    },
                    {
                        label: RandomStringType.Distinguishable,
                        key: RandomStringType.Distinguishable,
                        children: (
                            <RandomStringItem
                                randomStringType={
                                    RandomStringType.Distinguishable
                                }
                                characters={
                                    CryptoRandomStringCharacters.distinguishableCharacters
                                }
                            />
                        ),
                    },
                    {
                        label: RandomStringType.Custom,
                        key: RandomStringType.Custom,
                        children: <RandomStringCustom />,
                    },
                ]}
            />
        </section>
    );
};

export default RandomString;
