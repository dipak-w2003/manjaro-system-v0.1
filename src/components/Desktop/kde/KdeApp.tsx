import React, { lazy } from "react";
const LazyTaskbarApp = lazy(() => import("./Pages/1-taskbar/TaskbarApp"));
const LazyMainScreen = lazy(() => import("./Pages/2-main-screen/MainScreen"));
const KdeApp = () => {
  return (
    <div className="h-[100vh] w-full ct-default *:w-full bg-slate-700 *:noto-sans text-white relative flex flex-col selection:bg-transparent overflow-hidden ">
      <LazyMainScreen styles="h-[96vh]" />
      <LazyTaskbarApp styles="h-[4vh] " />
    </div>
  );
};

export default KdeApp;

export interface IStyleClassProps {
  styles?: string;
}
