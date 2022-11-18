import Image from "next/image";
import React from "react";
import RightNavigationMenu from "./RightNavigationMenu";

const NavigationMenu = () => {
  return (
    <div className="pt-10 pb-12 h-20 flex flex-row justify-between items-center mb-2">
      <div className="">
        <div className="flex flex-col">
          <div className="text-4xl text-[#1a1523] font-bold">
            Quick
            <span className="highlightText">Diff</span>
          </div>
          <div>
            Built by{" "}
            <a
              className="logo-highlightText hover:text-indigo-800 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://proxyman.io"
            >
              Proxyman
            </a>
          </div>
        </div>
      </div>
      <RightNavigationMenu />
    </div>
  );
};

export default NavigationMenu;
