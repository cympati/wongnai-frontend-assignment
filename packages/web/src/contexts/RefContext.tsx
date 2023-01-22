import React, { createContext, createRef } from "react";

export type RefContextType = {
  promotion: React.RefObject<HTMLDivElement>;
  recommended: React.RefObject<HTMLDivElement>;
  more: React.RefObject<HTMLDivElement>;
};

export type RefContextTypeSignature = "promotion" | "recommended" | "more";
export const RefContext = createContext<RefContextType>({
  promotion: createRef(),
  recommended: createRef(),
  more: createRef(),
});
