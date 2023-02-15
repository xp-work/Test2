import React from "react";

export type GenerateKey = {
    publicKey: string;
    privateKey: string;
};

export type GenerateKeyContext = {
    setPublicKey: Nullable<React.Dispatch<React.SetStateAction<string>>>;
    setPrivateKey: Nullable<React.Dispatch<React.SetStateAction<string>>>;
} & GenerateKey;

export const minBit = 8;
export const maxBit = 4096;
export const stepBit = 8;
