import Image from "next/image";
import React from "react";
import RightNavigationMenu from "./RightNavigationMenu";

const NavigationMenu = () => {
  return (
    <div className="pt-10 pb-12 h-20 flex flex-row justify-between items-center">
      <div className="">
        <div className="flex flex-col">
          <div className="text-4xl text-[#1a1523] font-bold">
            Quick
            <span className="highlightText">Diff</span>
          </div>
          <div>
            Built by{" "}
            <a
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
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
