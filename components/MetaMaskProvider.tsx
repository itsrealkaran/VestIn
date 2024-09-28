// @ts-nocheck
"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";

export const MetaMaskProvide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <MetaMaskProvider value>{children}</MetaMaskProvider>;
};  