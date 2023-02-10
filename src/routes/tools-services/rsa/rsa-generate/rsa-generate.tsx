import React, { useState } from "react";
import RsaGenerateMain from "@project-self/routes/tools-services/rsa/components/rsa-generate-main";
import {
    defaultGenerateKey,
    RsaKeyContext,
} from "@project-self/routes/tools-services/rsa/context";

const RsaGenerate = () => {
    const [publicKey, setPublicKey] = useState(defaultGenerateKey.publicKey);
    const [privateKey, setPrivateKey] = useState(defaultGenerateKey.privateKey);
    return (
        <section className={"h-full overflow-auto p-1"}>
            <RsaKeyContext.Provider
                value={{
                    privateKey,
                    publicKey,
                    setPrivateKey,
                    setPublicKey,
                }}
            >
                <RsaGenerateMain isSingle={true} />
            </RsaKeyContext.Provider>
        </section>
    );
};

export default RsaGenerate;
