import React, { lazy, Suspense, useCallback, useEffect } from "react";
import { RecentPkg } from "@/Redux/1-user-state/recentSlice";
import { AppPkgId } from "../kde/Pages/1-taskbar/1-apps-menu/AppCategoryList";
import { GiCrossedSwords, GiCrossMark } from "react-icons/gi";
import { Crosshair } from "lucide-react";
import { LuCross } from "react-icons/lu";
import { PiCrossLight } from "react-icons/pi";
import { CloseButton } from "react-toastify";
import { IoCloseCircle } from "react-icons/io5";

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
  const { pkgId, appName, desc } = app;
  const Component = AppComponentRender[pkgId];

  // Avoid unnecessary re-creation of the function
  const handleRemove = useCallback(() => {
    removeApp(pkgId);
  }, [pkgId, removeApp]);
  if (!Component) return <h2 className="text-red-500">...App Not Registered</h2>;


  // set full or half app window of rendered apps
  const [ViewPort, setViewPort] = React.useState<boolean>(true)
  let clicked: number = 0;
  const setView = async () => {
    console.log(clicked);
    if (clicked >= 3) {
      setViewPort(prev => prev = true)
      console.log(ViewPort);
      clicked = 0
    } else {
      setViewPort(prev => prev = false)
      await clicked++
    }
    await clicked++
  }
  useEffect(() => {

  }, [clicked, ViewPort])

  return (
    <Suspense fallback={<p className="text-gray-400">...loading {appName}</p>}>
      <main className={` ${ViewPort ? "h-full w-full" : "h-[50vh] w-[50vw]"}  bg-slate-800 relative`}>


        {/* Show Apps Title bar. i.e close, maximize minimize titles etc includes */}
        <div className=" h-[3vh] w-full relative bg-slate-900" title="close" onClick={setView}>
          <h2 className="text-center text-sm ">{appName} - {desc}</h2>
          <IoCloseCircle className="text-lg absolute right-2 top-[1.5px]  text-white" onClick={handleRemove} />
        </div>


        {/* Show Apps Contents */}
        <section className="h-full overflow-y-scroll transition-all">
          <Component app={app} />
        </section>

      </main>
    </Suspense>
  );
});

// Prevent unnecessary re-renders based on props changes
export default React.memo(RenderApp);
