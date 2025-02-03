import React, { lazy, Suspense } from "react";
import { IStyleClassProps } from "../../KdeApp";
const TitleBarLayout = lazy(() => import("./1-title-bar/TitleBarLayout"));
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
const MainScreen: React.FC<IStyleClassProps> = ({ styles }) => {
  const appsOpened = useSelector((state: RootState) => state.recents);
  return (
    // ? background image added from index css as id
    <Suspense fallback={<div className="motion-preset-confetti "></div>}>
      <div id="main-screen" className={`${styles}`}>
        {appsOpened.map((app) => {
          return <TitleBarLayout key={app.pkgId} pkgId={app.pkgId} />;
        })}
      </div>
    </Suspense>
  );
};

export default MainScreen;

// Make:
//  a screen layout with window title bar
//  open/toggle to view  a specific isFocused component in the main screen from opened apps
