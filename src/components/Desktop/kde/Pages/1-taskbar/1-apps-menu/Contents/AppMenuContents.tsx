import React, { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import CenterMenu from "./CenterMenu";
import BottomMenu from "./BottomMenu";
const AppMenuContents = ({
  setToggle,
  toggle,
}: {
  setToggle: () => void;
  toggle: boolean;
}) => {
  const onMouseRemoveClose = () =>
    setTimeout(() => {
      setToggle();
    }, 1000);
  return (
    <div
      className={`bg-[#3d4247] h-[75vh]  ct-default w-[50vw] absolute -z-50 left-0 bottom-[3.8vh] rounded-tr-sm  overflow-hidden flex *:flex flex-col   justify-center  *:items-center *:overflow-hidden text-black noto-sans px-4
      *:motion-translate-y-in-100 *:motion-duration-[0.35s] *:motion-ease-spring-smooth 

      `}
      onMouseLeave={() => onMouseRemoveClose()}
    >
      <TopMenu styles={"h-[8%]"} />
      <CenterMenu styles={"h-[84%]  "} />
      <BottomMenu styles={"h-[8%] bg-green-800 "} />
    </div>
  );
};

export default AppMenuContents;
