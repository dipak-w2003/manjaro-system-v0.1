import React, { Suspense } from "react";
import { IStyleClassProps } from "../../KdeApp";
import AppMenu from "./1-apps-menu/AppMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { toggleRecent } from "@/Redux/1-user-state/recentSlice";
import { FaCross } from "react-icons/fa6";
const TaskbarApp: React.FC<IStyleClassProps> = ({ styles }): JSX.Element => {
  const recentApps = useSelector((state: RootState) => state.recents);

  const dispatch: AppDispatch = useDispatch();
  function ShowAppsRecentTaskbar() {
    if (recentApps.length < 0 || !Array.isArray(recentApps))
      return <p className="text-white"></p>;
    return recentApps.map((app) => {
      return (
        <Suspense
          fallback={<p className="text-sm">{app.appName}</p>}
          key={app.pkgId}
        >
          <span
            className={`flex justify-center  items-center gap-1 hover:scale-110  bg-gradient-to-bl
              ${app.isFocused && " from-cyan-500  to-slate-900 font-extrabold"
              }  py-2 px-2 transition-all`}
            onClick={() => dispatch(toggleRecent(app))}
          >
            <img src={app.appIcon} className="inline-block h-4 w-4" alt="" />
            <h2 className="text-[10px] line-clamp-1">{app.appName}-title.</h2>
          </span>
        </Suspense>
      );
    });
  }
  return (
    <div
      className={` ${styles} ct-pointer *:h-full *:w-1/2 w-full   flex *:flex items-center bg-slate-800 *:items-center relative  *:z-50 z-[999999999999999]`}
    >
      {/* s1 : App Menu & Apps Recent */}
      <section>
        <AppMenu />

        <div className=" w-full h-full flex *:flex justify-start *:justify-start items-center   border-l border-l-gray-500 overflow-hidden">

          {<ShowAppsRecentTaskbar />}
        </div>
      </section>

      {/* s2 : Power Sections */}
      <section></section>
    </div>
  );
};

export default TaskbarApp;
