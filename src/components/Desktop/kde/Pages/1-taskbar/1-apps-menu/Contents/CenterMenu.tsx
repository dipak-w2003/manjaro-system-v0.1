import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import React, { lazy, useEffect, useState } from "react";
const CMLeft = lazy(() => import("./CMLeft"));
const CMRight = lazy(() => import("./CMRight"));
import { AppLists, IAppMenu } from "../AppMenuList";

const CenterMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  const [selectedOption, setSelected] = useState<IAppMenu | null>(AppLists[0]);
  useEffect(() => {}, [selectedOption]);

  return (
    <div className={`${styles} *:h-full text-gray-200 font-semibold`}>
      <CMLeft setSelected={setSelected} selectedOption={selectedOption} />
      <CMRight appCategory={selectedOption.appCategory} />
    </div>
  );
};

export default CenterMenu;

// ? CM : CenterMenu
