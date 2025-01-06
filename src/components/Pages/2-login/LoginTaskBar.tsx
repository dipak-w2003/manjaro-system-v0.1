import React, { useState } from "react";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import TbPowerBtn from "./1-TaskBar/TbPowerBtn";
import TbAccessibility from "./1-TaskBar/TbAccessibility";
import TbDesktopChange from "./1-TaskBar/TbDesktopChange";
import TbLangChange from "./1-TaskBar/TbLangChange";
const LoginTaskBar = () => {
  const currentUser = useSelector(
    (state: RootState) => state.activeUser.user[0].sysUname
  );
  const Icon = useSelector(
    (state: RootState) => state.activeUser.user[0].desktopEnv
  );

  return (
    <div className="*:h-full h-full w-full *:w-[45%] flex justify-between items-center overflow-hidden *:px-2 *:text-[#c7c7c7]">
      <h2 className="text-sm">{currentUser}-system</h2>
      <section className=" flex space-x-[3px] justify-end *:h-full *:min-w-[5%]  *:flex *:justify-center *:items-center *:cursor-pointer">
        <TbDesktopChange IconKey={Icon} />
        <TbLangChange />
        <TbAccessibility />
        <TbPowerBtn />
      </section>
    </div>
  );
};

export default LoginTaskBar;
