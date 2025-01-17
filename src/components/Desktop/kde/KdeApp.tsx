import React, { lazy, Suspense } from "react";
import LazyKdeLoad from "./Pages/LazyKdeLoad";
const LazyTaskbarApp = lazy(() => import("./Pages/1-taskbar/TaskbarApp"));
const LazyMainScreen = lazy(() => import("./Pages/2-main-screen/MainScreen"));
const KdeApp = () => {
  return (
    <Suspense fallback={<LazyKdeLoad />}>
      <div className="h-[100vh] w-full ct-default *:w-full bg-slate-700 *:noto-sans text-white relative flex flex-col selection:bg-transparent overflow-hidden ">
        <LazyMainScreen styles="h-[96vh]" />
        <LazyTaskbarApp styles="h-[4vh] " />
      </div>
    </Suspense>
  );
};

export default KdeApp;

export interface IStyleClassProps {
  styles?: string;
}
