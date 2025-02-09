import React, { lazy, Suspense, useCallback } from "react";
import { RecentPkg } from "@/Redux/1-user-state/recentSlice";
import { AppPkgId } from "../kde/Pages/1-taskbar/1-apps-menu/AppCategoryList";

const VSCode = lazy(() => import("@/components/Desktop/Apps/VS-Code/VSCode"));
const TerminalApp = lazy(() => import("@/components/Desktop/Apps/Terminal/TerminalApp"));
const MusicPlayerApp = lazy(() => import("@/components/Desktop/Apps/Music-Player/MusicPlayerApp"));
const TodoApp = lazy(() => import("@/components/Desktop/Apps/Todo/TodoApp"));

const AppComponentRender: Record<AppPkgId, React.ComponentType<any>> = {
  "development-vscode": VSCode,
  "entertainment-musicplayer": MusicPlayerApp,
  "system-terminal": TerminalApp,
  "utilities-notepad": TodoApp,
};

interface RenderAppProps {
  app: RecentPkg;
  removeApp: (pkgId: AppPkgId) => void;
}

const RenderApp: React.FC<RenderAppProps> = React.memo(({ app, removeApp }) => {
  const { pkgId, appName } = app;
  const Component = AppComponentRender[pkgId];

  // Avoid unnecessary re-creation of the function
  const handleRemove = useCallback(() => {
    removeApp(pkgId);
  }, [pkgId, removeApp]);

  if (!Component) return <h2 className="text-red-500">...App Not Registered</h2>;

  return (
    <Suspense fallback={<p className="text-gray-400">...loading {appName}</p>}>
      <div className="h-full w-full bg-black relative">
        <button className="absolute right-3 bg-red-500 text-white px-3 py-1 rounded-md" onClick={handleRemove}>
          Close
        </button>
        <Component app={app} />
      </div>
    </Suspense>
  );
});

// Prevent unnecessary re-renders based on props changes
export default React.memo(RenderApp);
