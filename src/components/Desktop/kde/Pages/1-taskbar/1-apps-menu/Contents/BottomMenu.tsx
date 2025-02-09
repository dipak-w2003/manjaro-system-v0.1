import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import { RiApps2AddFill } from "react-icons/ri";
import { LuCirclePower } from "react-icons/lu";
import { GiNightSleep } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import { LuDraftingCompass } from "react-icons/lu";
import React from "react";
import { IconType } from "react-icons";
import { useDispatch } from "react-redux";
import { setLogout } from "@/Redux/1-user-state/isLoggedSlice";
import { clearRecents } from "@/Redux/1-user-state/recentSlice";

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
  async function logout() {
    await dispatch(setLogout());
    await dispatch(clearRecents());
  }

  return (
    <div
      className={`${styles}  flex justify-around  *:h-[90%] *:w-[20%] *:flex gap-1   *:gap-2 *:text-md
        *:items-center *:justify-center   text-gray-200 font-medium relative z-50 `}
    >
      {apps.map((app) => {
        return (
          <span
            title={app.name}
            key={app.name}
            onClick={() => {
              return app.name === "LogOut" && logout();
            }}
            className={`ct-pointer`}
            style={{
              borderTop: app.isActive
                ? "3.5px solid #5898a5"
                : "3.5px solid transparent",
            }}
          >
            <app.icon />
            <h3 className="hidden lg:text-sm lg:block xl:block line-clamp-1">
              {app.name}
            </h3>
          </span>
        );
      })}
    </div>
  );
};

export default BottomMenu;
