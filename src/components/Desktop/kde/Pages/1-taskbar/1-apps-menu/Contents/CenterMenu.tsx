import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import React, { useEffect, useState } from "react";
import CMLeft from "./CMLeft";
import CMRight from "./CMRight";
import { AppLists, IAppMenu } from "../AppMenuList";

const CenterMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  const [selectedOption, setSelected] = useState<IAppMenu | null>(AppLists[0]);
  useEffect(() => {}, [selectedOption]);

  return (
    <div className={`${styles} *:h-full `}>
      <CMLeft setSelected={setSelected} selectedOption={selectedOption} />
      <CMRight appCategory={selectedOption.appCategory} />
    </div>
  );
};

export default CenterMenu;

// ? CM : CenterMenu
