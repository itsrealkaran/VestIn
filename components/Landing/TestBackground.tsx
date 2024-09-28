"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
// import { Button } from "../ui/button";
import { AnimatedModalDemo } from "./Modal";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className=" h-[80vh]  w-full flex flex-col gap-1 mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-slate-800 font-bold mt-28 inter-var text-center">
        VestIN
      </p>
      <p className="text-base md:text-base font-medium mb-3  text-slate-800  inter-var text-center">
        A Free Vesting Platform In Blockchain
      </p>
      <AnimatedModalDemo/>
    </WavyBackground>
  );
}
