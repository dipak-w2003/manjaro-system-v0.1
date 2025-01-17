import React, { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import CenterMenu from "./CenterMenu";
import BottomMenu from "./BottomMenu";
import { AppLists, IAppMenu } from "../AppMenuList";
const AppMenuContents = ({ setToggle }: { setToggle: () => void }) => {
  const onMouseRemoveClose = () =>
    setTimeout(() => {
      setToggle();
    }, 1000);
  const [selectedOption, setSelected] = useState<IAppMenu | null>(AppLists[0]);
  useEffect(() => {
    console.log(AppLists[0].childrens);
  }, [onMouseRemoveClose, selectedOption]);
  return (
    <div
      className="bg-[#3d4247] h-[75vh]  ct-default w-[50vw] absolute left-0 bottom-[3.3vh] rounded-tr-sm  overflow-hidden motion-preset-confetti
      flex *:flex flex-col   justify-center  *:items-center 
      *:overflow-hidden text-black
      noto-sans px-4"
      onMouseLeave={() => onMouseRemoveClose()}
    >
      <TopMenu styles={"h-[6.5%] bg-red-200"} />
      <CenterMenu styles={"h-[87%]  "} />
      <BottomMenu styles={"h-[6.5%] bg-green-800 "} />
    </div>
  );
};

export default AppMenuContents;
