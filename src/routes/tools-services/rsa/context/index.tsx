import { GenerateKeyContext } from "@project-self/routes/tools-services/rsa/types";
import React from "react";

export const defaultGenerateKey: GenerateKeyContext = {
    publicKey: "",
    privateKey: "",
    setPublicKey: null,
    setPrivateKey: null,
};

export const RsaKeyContext = React.createContext(defaultGenerateKey);
