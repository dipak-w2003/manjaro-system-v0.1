import MusicPlayerApp from "@/components/Desktop/Apps/Music-Player/MusicPlayerApp";
import TerminalApp from "@/components/Desktop/Apps/Terminal/TerminalApp";
import VSCode from "@/components/Desktop/Apps/VS-Code/VSCode";
import React, { useEffect } from "react";
import { AppPkgId } from "../../1-taskbar/1-apps-menu/AppCategoryList";

export interface ITitleBarLayout {
  pkgId: string;
  //   children?: React.ReactNode;
}
const TitleBarLayout: React.FC<ITitleBarLayout> = ({ pkgId }) => {
  useEffect(() => {}, [pkgId]);
  return (
    <div
      className={`flex h-full w-full bg-amber-400 absolute *:motion-duration-[0.35s] *:motion-ease-spring-smooth`}
    >
      {pkgId}
    </div>
  );
};

export default TitleBarLayout;
