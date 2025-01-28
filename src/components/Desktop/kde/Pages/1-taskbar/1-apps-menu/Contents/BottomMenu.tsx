import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import { RiApps2AddFill } from "react-icons/ri";
import { LuCirclePower } from "react-icons/lu";
import { GiNightSleep } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import { LuDraftingCompass } from "react-icons/lu";
import React, { ComponentType, SVGProps } from "react";
import { IconType } from "react-icons";
import { useDispatch } from "react-redux";
import { setLogout } from "@/Redux/1-user-state/isLoggedSlice";

interface BottomMenusType {
  name: string;
  icon: IconType;
  isActive?: boolean;
}
const BottomMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  const apps: BottomMenusType[] = [
    {
      name: "Apps",
      icon: RiApps2AddFill,
      isActive: true,
    },
    {
      name: "Places",
      icon: LuDraftingCompass,
    },

    {
      name: "Pow Off",
      icon: LuCirclePower,
    },
    {
      name: "Sleep",
      icon: GiNightSleep,
    },
    ,
    {
      name: "Restart",
      icon: MdRestartAlt,
    },
    {
      name: "LogOut",
      icon: IoLogOutOutline,
    },
  ];
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
  };

  return (
    <div
      className={`${styles}  flex justify-center  *:h-full *:w-[20%] *:flex gap-1   *:gap-2 *:text-md *:items-center *:justify-center rounded-4 overflow-hidden text-gray-200 font-medium`}
    >
      {apps.map((app, _) => {
        return (
          <span
            onClick={() => {
              app.name === "LogOut" && logout();
            }}
            className={`${
              app.isActive && " border-t-green-400"
            } border-t-2 border-t-transparent ct-pointer`}
          >
            <app.icon />
            <h3>{app.name}</h3>
          </span>
        );
      })}
    </div>
  );
};

export default BottomMenu;
