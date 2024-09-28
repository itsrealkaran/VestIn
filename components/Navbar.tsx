"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";

export default function Navbar() {
  const [account, setAccount] = useState<string>();
  const { sdk, connected } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
      console.log(account);
      if (connected) {
        console.log("successful");
      } else {
        console.log("not connected");
      }
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <div className="w-full sticky z-50 flex items-center justify-between py-3 px-10 border border-b-slate-300 border-x-0 border-t-0">
      <Link href={"./"} className="font-semibold text-xl">
      VestIN
        </Link>

      <div className="flex items-center gap-5">
        <Link href={"./projects"} className="text-lg font-medium underline">
          Projects
        </Link>
        <Button onClick={connect}>
          {connected ? "Connected" : "Connect wallet"}
        </Button>
      </div>
    </div>
  );
}