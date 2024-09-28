
"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";

export const MetaMaskProvide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <MetaMaskProvider sdkOptions={{dappMetadata: {
    name: "Example React Dapp"
  }}}>{children}</MetaMaskProvider>;
};  