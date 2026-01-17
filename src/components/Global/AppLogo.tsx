
"use client";

import Image from "next/image";
import React from "react";

type AppLogoProps = {
  height?: number;
  width?: number;
  textSize?:'sm' | 'lg'| 'xl'
};

const AppLogo: React.FC<AppLogoProps> = ({ height = 32, width = 32,textSize }) => {
  return (
    <section className="flex flex-row items-center gap-2">
      <Image
        src="/HaveitLogo.svg"
        alt="haveIt-logo"
        height={height}
        width={width}
      />
      <div className="flex flex-col">
        <h1 className={`text-text-black font-medium ${textSize==='xl' ? 'text-3xl':'text-xl'} `}>Haveit</h1>
        <p className={`font-normal text-grayShade ${textSize === 'xl' ? 'text-xl':'text-xs'}`}>By Memow PVT LTD</p>
      </div>
    </section>
  );
};

export default AppLogo;
