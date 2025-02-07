import React, { lazy, ReactNode, Suspense } from "react";
import { IStyleClassProps } from "../../KdeApp";
const TitleBarLayout = lazy(() => import("./1-title-bar/TitleBarLayout"));
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { AppPkgId } from "../1-taskbar/1-apps-menu/AppCategoryList";
import VSCode from "@/components/Desktop/Apps/VS-Code/VSCode";
const TerminalApp = lazy(
  () => import("@/components/Desktop/Apps/Terminal/TerminalApp")
);
const MusicPlayerApp = lazy(
  () => import("@/components/Desktop/Apps/Music-Player/MusicPlayerApp")
);
import { RecentPkg, removeRecent } from "@/Redux/1-user-state/recentSlice";

const MainScreen: React.FC<IStyleClassProps> = ({ styles }) => {
  const appsOpened = useSelector((state: RootState) => state.recents);
  const dispatch: AppDispatch = useDispatch();

  // Store component references instead of JSX elements
  const AppComponentRender: Record<AppPkgId, React.ComponentType<any>> = {
    "development-vscode": VSCode,
    "entertainment-musicplayer": MusicPlayerApp,
    "system-terminal": TerminalApp,
  };

  function RenderApp(app: RecentPkg) {
    const { pkgId, appName } = app;
    const Component = AppComponentRender[pkgId];
    if (!Component) return <h2>...App Not registered</h2>;

    return (
      <Suspense fallback={<p>...loading {appName}</p>}>
        <div className="h-full w-full bg-black realtive">
          <button
            className="absolute right-3 bg-red-400 w-fit  h-fit p-2  "
            onClick={() => dispatch(removeRecent(app.pkgId))}
          >
            close{" "}
          </button>
          <Component app={app} />
          {/* ✅ Passing `app` object as a prop */}
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div className="motion-preset-confetti"></div>}>
      <main id="main-screen" className={`${styles}`}>
        {appsOpened
          .filter((app) => app.isFocused)
          .map((app) => (
            <RenderApp key={app.pkgId} {...app} />
          ))}
      </main>
    </Suspense>
  );
};

export default MainScreen;
