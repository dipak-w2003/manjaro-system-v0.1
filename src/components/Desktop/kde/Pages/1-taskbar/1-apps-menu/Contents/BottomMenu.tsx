import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import { PowerOff, PowerOffIcon } from "lucide-react";
import React from "react";

const BottomMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  return (
    <div
      className={`${styles}  flex *:h-full *:w-1/6 gap-2 *:bg-red-400 *:flex *:justify-center *:items-center `}
    >
      <span>
        <PowerOffIcon />
        <h3>Shutdown</h3>
      </span>
      <span>
        <h3>Places</h3>
      </span>
      <span>
        <h3>Sleep</h3>
      </span>
      <span>
        <h3>Restart</h3>
      </span>
      <span>
        <h3>Hibernate</h3>
      </span>
      <span>
        <h3>Logout</h3>
      </span>
    </div>
  );
};

export default BottomMenu;
