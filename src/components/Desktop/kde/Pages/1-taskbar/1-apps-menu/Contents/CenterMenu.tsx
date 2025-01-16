import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import React from "react";
import CMLeft from "./CMLeft";
import CMRight from "./CMRight";
const CenterMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  return (
    <div className={`${styles} *:h-full `}>
      <CMLeft styles={"w-[35%]"} />
      <CMRight styles={"w-[65%]"} />
    </div>
  );
};

export default CenterMenu;

// ? CM : CenterMenu
